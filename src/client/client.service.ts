import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './client.model';
import {
  UpdateClientStatusDto,
  updateStatusAction,
} from './dto/update-client-status.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { RemoveCompanyDto } from 'src/company/dto/remove-company.dto';

@Injectable()
export class ClientService {
  constructor(@InjectModel('Client') private readonly model: Model<Client>) {}

  async get(body: any): Promise<any> {
    if (!body.page) {
      body.page = 1;
    }

    const pageLength = 50;
    const start = pageLength * body.page - pageLength;
    const end = pageLength * body.page - 1;

    delete body.page;

    let result = await this.model.find(body).skip(start).limit(end);

    let totalPages = await this.model.count(body);

    if (totalPages < 50) {
      totalPages = 1;
    } else if ((totalPages / 50) % 1 === 0) {
      totalPages = totalPages / 50;
    } else {
      totalPages = Math.round(totalPages / 50) + 1;
    }

    return { result, totalPages };
  }

  async create(body: CreateClientDto): Promise<any> {
    const data = await this.get({
      document: body.document,
      companyId: body.companyId,
    });

    if (data.result.length > 0) {
      throw new HttpException(
        'Client already registred',
        HttpStatus.BAD_REQUEST,
      );
    }

    body.createdAt = new Date();

    if (!body.active) {
      body.active = true;
    }

    return await this.model.create(body);
  }

  async update(body: UpdateClientDto): Promise<any> {
    const filter = { _id: body._id };
    body.updatedAt = new Date();

    if (body.companyId && body.companyId.length > 0) {
      const clientData: Client[] = await this.model.find({ _id: body._id });

      if (clientData[0].companyId) {
        body.companyId = body.companyId.concat(clientData[0].companyId);
      }

      body.companyId = body.companyId.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
    }

    delete body._id;

    return await this.model.findOneAndUpdate(filter, body);
  }

  async updateStatus(
    body: UpdateClientStatusDto,
    status: updateStatusAction,
  ): Promise<any> {
    const action = status.action === 'enable' ? true : false;

    let response = await this.model.findByIdAndUpdate(
      { _id: body._id, companyId: body.companyId[0], updatedAt: new Date() },
      { active: action },
    );

    response.active = action;

    return response;
  }

  async removeCompany(body: RemoveCompanyDto): Promise<UpdateClientDto | null> {
    const filter = { _id: body._id };
    let updatedCompany = [];

    const clientData: Client[] = await this.model.find({ _id: body._id });

    if (
      body.companyId &&
      body.companyId.length > 0 &&
      clientData[0].companyId.length != 0
    ) {
      for (const companyIdToRemove of body.companyId) {
        updatedCompany = clientData[0].companyId.filter(
          (companyId) => companyIdToRemove != companyId,
        );
      }

      delete body._id;

      const updatedAt = new Date().toISOString();

      return await this.model.findOneAndUpdate(filter, {
        companyId: updatedCompany,
        updatedAt,
      });
    }
  }
}
