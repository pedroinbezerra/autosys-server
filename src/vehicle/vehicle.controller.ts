import { Body, Controller, Delete, HttpCode, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { vehicleSoftDeleteDto } from './dto/vehicle-soft-delete.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { RemoveCompanyDto } from 'src/company/dto/remove-company.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppService } from 'src/app.service';

@Controller('vehicle')
@UseGuards(new AuthGuard('t]bJ#8Nb0QI#&yr%imoX-Js'))
export class VehicleController {
    constructor(
        private service: VehicleService,
        private appService: AppService) { }

    @Post('/find')
    @HttpCode(200)
    async get(@Body() body: any, @Request() req: any) {
        body.companyId = this.appService.getCompanyId(req);
        return await this.service.get(body);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() body: CreateVehicleDto) {
        return await this.service.create(body);
    }

    @Patch()
    @HttpCode(200)
    async update(@Body() body: UpdateVehicleDto): Promise<UpdateVehicleDto> {
        return await this.service.update(body);
    }

    @Delete()
    @HttpCode(200)
    async softDelete(@Body() body: vehicleSoftDeleteDto) {
        return await this.service.softDelete(body);
    }

    @Delete('/company')
    @HttpCode(200)
    async removeCompany(@Body() body: RemoveCompanyDto) {
        return await this.service.removeCompany(body);
    }
}
