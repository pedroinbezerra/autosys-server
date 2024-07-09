import { Injectable } from '@nestjs/common';
import { CreateNPSDto } from './dto/create-nps.dto';
import { InjectModel } from '@nestjs/mongoose';
import { NPS } from './nps.model';
import { Model } from 'mongoose';

@Injectable()
export class NpsService {
    constructor(
        @InjectModel('NPS') private readonly model: Model<NPS>
    ) { }

    async get(body: any): Promise<any> {
        return await this.model.find(body);
    }

    async create(body: CreateNPSDto): Promise<any> {
        return await this.model.create(body);
    }
}
