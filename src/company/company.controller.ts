import { Body, Controller, Delete, HttpCode, Patch, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanySoftDeleteDto } from './dto/company-soft-delete.dto';

@Controller('company')
export class CompanyController {
    constructor(private service: CompanyService) {
    }

    @Post('/find')
    @HttpCode(200)
    async get(@Body() body: any) {
        return await this.service.get(body);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() body: CreateCompanyDto) {
        return await this.service.create(body);
    }

    @Patch()
    @HttpCode(200)
    async update(@Body() body: UpdateCompanyDto): Promise<UpdateCompanyDto> {
        return await this.service.update(body);
    }

    @Delete()
    @HttpCode(200)
    async softDelete(@Body() body: CompanySoftDeleteDto) {
        return await this.service.softDelete(body);
    }
}
