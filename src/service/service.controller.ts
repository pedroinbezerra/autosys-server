import { Body, Controller, Delete, HttpCode, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceSoftDeleteDto } from './dto/service-soft-delete.dto';
import { CreateserviceDto } from './dto/create-service.dto';
import { UpdateserviceDto } from './dto/update-service.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppService } from 'src/app.service';

@Controller('service')
@UseGuards(new AuthGuard('t]bJ#8Nb0QI#&yr%imoX-Js'))
export class ServiceController {
    constructor(
        private service: ServiceService,
        private appService: AppService
    ) { }

    @Post('/find')
    @HttpCode(200)
    async get(@Body() body: any, @Request() req: any) {
        body.companyId = this.appService.getCompanyId(req);
        return await this.service.get(body);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() body: CreateserviceDto, @Request() req: any) {
        body.companyId = this.appService.getCompanyId(req);
        return await this.service.create(body);
    }

    @Patch()
    @HttpCode(200)
    async update(@Body() body: UpdateserviceDto, @Request() req: any) {
        body.companyId = this.appService.getCompanyId(req);
        return await this.service.update(body);
    }

    @Delete()
    @HttpCode(200)
    async softDelete(@Body() body: ServiceSoftDeleteDto, @Request() req: any) {
        body.companyId = this.appService.getCompanyId(req);
        return await this.service.softDelete(body);
    }
}
