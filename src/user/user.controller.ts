import { Body, Controller, Delete, Headers, HttpCode, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetPermissionDto } from './dto/get-permission.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { RemoveCompanyDto } from 'src/company/dto/remove-company.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppService } from 'src/app.service';

@Controller('user')
@UseGuards(new AuthGuard('t]bJ#8Nb0QI#&yr%imoX-Js'))
export class UserController {
    constructor(
        private service: UserService,
        private appService: AppService
    ) { }

    @Post('/find')
    @HttpCode(200)
    async get(@Body() body: any) {
        return await this.service.get(body);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() body: CreateUserDto) {
        return await this.service.create(body);
    }

    @Post('/permission')
    @HttpCode(200)
    async permissions(@Body() body: GetPermissionDto, @Request() req: any) {
        body.companyId = this.appService.getCompanyId(req);
        return await this.service.permissions(body);
    }

    @Patch('/password')
    @HttpCode(200)
    async updatePassword(@Body() body: UpdateUserPasswordDto) {
        return await this.service.updatePassword(body);
    }

    @Patch()
    @HttpCode(200)
    async update(@Body() body: UpdateUserDto) {
        return await this.service.update(body);
    }

    @Delete()
    @HttpCode(200)
    async softDelete(@Body() body: UpdateUserDto) {
        return await this.service.softDelete(body);
    }

    @Delete('/company')
    @HttpCode(200)
    async removeCompany(@Body() body: RemoveCompanyDto) {
        return await this.service.removeCompany(body);
    }
}   
