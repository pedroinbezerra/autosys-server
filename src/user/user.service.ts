import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model, isValidObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { SendEmailDto } from './dto/send-email.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { GetPermissionDto } from './dto/get-permission.dto';
import { RemoveCompanyDto } from 'src/company/dto/remove-company.dto';

const bcrypt = require('bcrypt');
const generator = require('generate-password');
const axios = require('axios');

const baseUrl = 'https://www.autosys.fabrica2s.com.br';  // Linode
//const baseUrl = 'http://localhost';  // Local
//const baseUrl = 'http://localhost';      // Local

const mailerUrl = `http://72.14.183.211:3001`;
const saltRounds = 10;

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly model: Model<User>
    ) { }

    private async sendEmail(data: SendEmailDto) {
        axios.post(`${mailerUrl}/mail/send`, data)
            .then(() => {
                return {
                    status: "success"
                };
            })
            .catch(err => {
                console.log("🚫 [createUser] Erro ao enviar e-mail ✉️: ");
                console.log(err?.cause || err);
            })
    }

    private async hashPass(pass: string) {
        var passHashed: any
        await bcrypt.genSalt(saltRounds)
            .then(async (salt: any) => {
                await bcrypt.hash(pass, salt)
                    .then((hash: any) => {
                        passHashed = hash;
                    })
            })

        return passHashed;
    }

    async get(body: any): Promise<User[] & any> {
        if (!body.page) {
            body.page = 1;
        }

        const pageLength = 50;
        const start = (pageLength * body.page) - pageLength;
        const end = (pageLength * body.page) - 1;

        delete body.page;

        let result = await this.model.find(body).skip(start).limit(end);

        let totalPages = await this.model.count(body);

        if (totalPages < 50) {
            totalPages = 1
        }
        else if ((totalPages / 50) % 1 === 0) {
            totalPages = (totalPages / 50)
        } else {
            totalPages = Math.round((totalPages / 50)) + 1
        }


        return { result, totalPages }
    }

    async permissions(body: GetPermissionDto): Promise<any> {
        let query = {};

        if (!isValidObjectId(body._id)) {
            throw new HttpException('Invalid _id', HttpStatus.BAD_REQUEST);
        }

        query = { _id: body._id, companyId: body.companyId };

        if (body.route) {
            query = { _id: body._id, permissions: body.route };
        }

        const result = await this.model.find(query);

        if (!body.route && result.length > 0) {
            return result[0].permissions;
        }

        if (body.route && result.length > 0) {
            return true;
        } else if (body.route && result.length === 0) {
            return false;
        }

        return result;
    }

    async create(user: CreateUserDto, system = 'Autosys'): Promise<User | any> {

        if (!user.active) {
            user.active = true;
        }

        if ((await this.get({ username: user.username })).length) {
            console.log("Erro ao cadastrar usuário: Username cadastrado. 🚫");
            throw new HttpException('Username já cadastrado', HttpStatus.BAD_REQUEST);
        }

        const password = generator.generate({
            length: 8,
            numbers: true,
            symbols: true,
            lowercase: true,
            uppercase: true
        });

        user.password = await this.hashPass(password);
        user.createdAt = new Date();

        user.passwordExpiration = new Date();

        const mailData = {
            system: system,
            to: user.email,
            subject: "Acesse sua conta",
            html: `Sua conta no sistema ${system} foi criada com sucesso. Seguem abaixo suas credenciais de acesso:<br>&nbsp;<b>Usuário:</b> ${user.username}<br>&nbsp;<b>Senha:</b> ${password}<br>&nbsp;<b>Link acesso ao sistema:</b> <a href='${baseUrl}/login'>${baseUrl}</a>`
        }

        this.sendEmail(mailData);

        return await new this.model(user).save();
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.model.findOne({ email });
    }

    async getUserByUsername(username: string): Promise<any> {
        return await this.model.findOne({ username });
    }

    async recoveryPassword(email: string, system = 'F2S'): Promise<User | any> {
        const user = await this.getUserByEmail(email);

        if (!user) {
            console.log("🚫 Email não encontrado.");
            return {
                status: "erro",
                message: "email não encontrado"
            }
        }

        if (!user.active) {
            console.log("🚫 Usuário desabilitado.");
            return {
                status: "erro",
                message: "usuário desabilitado"
            }
        }

        var password = generator.generate({
            length: 8,
            numbers: true,
            symbols: true,
            lowercase: true,
            uppercase: true
        });

        var passwordHash = await this.hashPass(password);

        const update = await this.model.findOneAndUpdate({ email }, { password: passwordHash })

        const mailData = {
            to: email,
            subject: "Redefinição de senha",
            html: `Sua senha de acesso ao ${system} foi redefinida com sucesso. Seguem abaixo suas credenciais:<br>&nbsp;<b>Usuário:</b> ${user.username}<br>&nbsp;<b>Senha:</b> ${password}<br>&nbsp;<b>Link acesso ao sistema:</b> <a href='${baseUrl}/login'>${baseUrl}</a>`
        }

        this.sendEmail(mailData);

        return user;
    }

    async updatePassword(data: UpdateUserPasswordDto): Promise<any> {
        const { username, password } = data;
        const user = await this.getUserByUsername(username);

        if (!data.passwordExpiration) {
            data = { ...data, passwordExpiration: new Date(new Date().setDate(new Date().getDate() + 30)) }
        }

        if (!user) {
            console.log("🚫 Usuário não encontrado.");
            return {
                status: "erro",
                message: "Usuário não encontrado"
            }
        }

        if (!user.active) {
            console.log("🚫 Usuário desabilitado.");
            return {
                status: "erro",
                message: "usuário desabilitado"
            }
        }

        var passwordHash = await this.hashPass(password);

        return await this.model.findOneAndUpdate({ username }, { password: passwordHash, passwordExpiration: data.passwordExpiration });
    }

    async deleteUserById(id: string) {
        return await this.model.findByIdAndDelete(id);
    }

    async update(user: UpdateUserDto) {
        if (!isValidObjectId(user._id)) {
            throw new HttpException('Invalid _id', HttpStatus.BAD_REQUEST);
        }

        user.updatedAt = new Date();
        const filter = user._id;
        delete user.username;
        user.updatedAt = new Date();

        if (user.password) {
            const passwordExpiration = new Date(new Date().setDate(new Date().getDate() + 30));
            user.password = await this.hashPass(user.password);
        }

        if (user.permissions && user.permissions.length > 0) {
            const userData: User[] = await this.model.find({ _id: user._id });

            if (userData[0].permissions) {
                user.permissions = user.permissions.concat(userData[0].permissions);
            }

            user.permissions = user.permissions.filter(function (elem, index, self) {
                return index === self.indexOf(elem);
            });
        }

        if (user.companyId && user.companyId.length > 0) {
            const userData: User[] = await this.model.find({ _id: user._id });

            if (userData[0].companyId) {
                user.companyId = user.companyId.concat(userData[0].companyId);
            }

            user.companyId = user.companyId.filter(function (elem, index, self) {
                return index === self.indexOf(elem);
            });
        }

        delete user._id;

        return await this.model.findOneAndUpdate({ _id: filter }, user);
    }

    async softDelete(user: UpdateUserDto) {
        return await this.model.findOneAndUpdate({ _id: user._id, updatedAt: new Date() }, { active: false });
    }

    async removeCompany(body: RemoveCompanyDto): Promise<UpdateUserDto | null> {
        const filter = { _id: body._id };
        let updatedCompany = [];

        const clientData: User[] = await this.model.find({ _id: body._id });

        if (body.companyId && body.companyId.length > 0 && clientData[0].companyId.length != 0) {
            for (const companyIdToRemove of body.companyId) {
                updatedCompany = clientData[0].companyId.filter((companyId) => companyIdToRemove != companyId);
            }

            delete body._id;

            const updatedAt = new Date().toISOString();

            return await this.model.findOneAndUpdate(filter, { companyId: updatedCompany, updatedAt });
        }
    }

    async getCompanyId(username: string): Promise<string | null> {
        return await this.model.find({ username: username })[0].companyId[0];
    }
}