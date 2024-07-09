import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import {
  UpdateClientStatusDto,
  updateStatusAction,
} from './dto/update-client-status.dto';
import { RemoveCompanyDto } from 'src/company/dto/remove-company.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppService } from 'src/app.service';

@Controller('client')
@UseGuards(new AuthGuard('t]bJ#8Nb0QI#&yr%imoX-Js'))
export class ClientController {
  constructor(private service: ClientService, private appService: AppService) {}

  @Post('/find')
  @HttpCode(200)
  async get(@Body() body: any, @Request() req: any) {
    body.companyId = this.appService.getCompanyId(req);
    return await this.service.get(body);
  }

  @Post()
  @HttpCode(200)
  async create(@Body() body: CreateClientDto, @Request() req: any) {
    body.createdAt = new Date();
    body.companyId[0] = this.appService.getCompanyId(req);
    return await this.service.create(body);
  }

  @Patch()
  @HttpCode(200)
  async update(@Body() body: UpdateClientDto, @Request() req: any) {
    body.companyId[0] = this.appService.getCompanyId(req);
    return await this.service.update(body);
  }

  @Post(':action')
  @HttpCode(200)
  async updateStatus(
    @Param() action: updateStatusAction,
    @Body() body: UpdateClientStatusDto,
    @Request() req: any,
  ) {
    const companyId = [this.appService.getCompanyId(req)];
    body = { ...body, companyId: companyId };
    return await this.service.updateStatus(body, action);
  }

  @Delete('/company')
  @HttpCode(200)
  async removeCompany(@Body() body: RemoveCompanyDto) {
    return await this.service.removeCompany(body);
  }
}
