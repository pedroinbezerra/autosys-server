import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from './vehicle.model';
import { vehicleSoftDeleteDto } from './dto/vehicle-soft-delete.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { RemoveCompanyDto } from 'src/company/dto/remove-company.dto';

@Injectable()
export class VehicleService {
    constructor(
        @InjectModel('Vehicle') private readonly model: Model<Vehicle>
    ) { }

    async get(body: any): Promise<any & number> {
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

    async create(body: CreateVehicleDto): Promise<any> {
        const data = await this.get({ plate: body.plate, companyId: body.companyId });

        if (data.result.length > 0) {
            throw new HttpException('Vehicle already registred', HttpStatus.BAD_REQUEST);
        }

        body.createdAt = new Date().toISOString();

        if (!body.active) {
            body.active = true;
        }

        return await this.model.create(body);
    }

    async update(body: UpdateVehicleDto): Promise<UpdateVehicleDto> {
        const filter = { _id: body._id };

        if (body.companyId && body.companyId.length > 0) {
            const clientData: Vehicle[] = await this.model.find({ _id: body._id });

            if (clientData[0].companyId) {
                body.companyId = body.companyId.concat(clientData[0].companyId);
            }

            body.companyId = body.companyId.filter(function (elem, index, self) {
                return index === self.indexOf(elem);
            });
        }

        delete body._id;
        delete body.createdAt;

        body.updatedAt = new Date().toISOString();

        return await this.model.findOneAndUpdate(filter, body);
    }

    async removeCompany(body: RemoveCompanyDto): Promise<UpdateVehicleDto | null> {
        const filter = { _id: body._id };
        let updatedCompany = [];

        const clientData: Vehicle[] = await this.model.find({ _id: body._id });

        if (body.companyId && body.companyId.length > 0 && clientData[0].companyId.length != 0) {
            for (const companyIdToRemove of body.companyId) {
                updatedCompany = clientData[0].companyId.filter((companyId) => companyIdToRemove != companyId);
            }

            delete body._id;

            const updatedAt = new Date().toISOString();

            return await this.model.findOneAndUpdate(filter, { companyId: updatedCompany, updatedAt });
        }
    }

    async softDelete(body: vehicleSoftDeleteDto): Promise<any> {
        return await this.model.findOneAndUpdate({ _id: body._id }, { active: false, updatedAt: new Date() });
    }
}
