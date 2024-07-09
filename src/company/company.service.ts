import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanySoftDeleteDto } from './dto/company-soft-delete.dto';

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel('Company') private readonly model: Model<Company>
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

    async create(body: CreateCompanyDto): Promise<any> {
        body.createdAt = new Date().toISOString();

        if (!body.active) {
            body.active = true;
        }

        return await this.model.create(body);
    }

    async update(body: UpdateCompanyDto): Promise<UpdateCompanyDto> {
        const filter = { _id: body._id };
        delete body._id;
        delete body.createdAt;

        body.updatedAt = new Date().toISOString();

        return await this.model.findOneAndUpdate(filter, body);
    }

    async softDelete(body: CompanySoftDeleteDto): Promise<any> {
        return await this.model.findOneAndUpdate({ _id: body._id }, { active: false, updatedAt: new Date() });
    }
}
