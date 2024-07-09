import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Versioning } from './versioning.model';
import { CreateVersioningDto } from './dto/create-versioning.dto';
import { UpdateVersioningDto } from './dto/update-versioning.dto';
import { UpdateVehicleDto } from 'src/vehicle/dto/update-vehicle.dto';
import { VersioningSoftDeleteDto } from './dto/versioning-soft-delete.dto';

@Injectable()
export class VersioningService {
  constructor(
    @InjectModel('Versioning') private readonly model: Model<Versioning>,
  ) {}

  async get(body: any): Promise<any & number> {
    if (!body.page) {
      body.page = 1;
    }

    const pageLength = 50;
    const start = pageLength * body.page - pageLength;
    const end = pageLength * body.page - 1;

    delete body.page;

    const result = await this.model.find(body).skip(start).limit(end);

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

  async create(body: CreateVersioningDto) {
    const data = await this.get({
      version: body.version,
      companyId: body.companyId,
    });

    if (data.result.length > 0) {
      throw new HttpException(
        'Vehicle already registred',
        HttpStatus.BAD_REQUEST,
      );
    }

    body.createdAt = new Date().toISOString();

    if (!body.active) {
      body.active = true;
    }

    return await this.model.create(body);
  }

  async update(body: UpdateVersioningDto): Promise<UpdateVehicleDto> {
    const filter = { _id: body._id };

    if (body.companyId && body.companyId.length > 0) {
      const versioning: Versioning[] = await this.model.find({ _id: body._id });

      if (versioning[0].companyId) {
        body.companyId = body.companyId.concat(versioning[0].companyId);
      }

      body.companyId = body.companyId.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
    }

    delete body._id;

    return await this.model.findOneAndUpdate(filter, body);
  }

  async softDelete(body: VersioningSoftDeleteDto): Promise<any> {
    return await this.model.findOneAndUpdate(
      { _id: body._id },
      { active: false, updatedAt: new Date() },
    );
  }
}
