import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from './service.model';
import { ServiceSoftDeleteDto } from './dto/service-soft-delete.dto';
import { CreateserviceDto } from './dto/create-service.dto';
import { UpdateserviceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
    constructor(
        @InjectModel('Service') private readonly model: Model<Service>
    ) { }

    async get(body: any): Promise<any> {
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

    async create(body: CreateserviceDto): Promise<any> {
        body.createdAt = new Date().toISOString();
        body.active = true;

        return await this.model.create(body);
    }

    async update(body: UpdateserviceDto): Promise<any> {
        const filter = { _id: body._id, companyId: body.companyId };
        delete body._id;

        body.updatedAt = new Date().toISOString();

        return await this.model.findOneAndUpdate(filter, body);
    }

    async softDelete(body: ServiceSoftDeleteDto): Promise<any> {
        return await this.model.findByIdAndUpdate({ _id: body._id, companyId: body.companyId }, { active: false, updatedBy: body.updatedBy, updatedAt: new Date() });
    }
}
