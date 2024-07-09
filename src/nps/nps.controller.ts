import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { NpsService } from './nps.service';
import { CreateNPSDto } from './dto/create-nps.dto';

@Controller('nps')
export class NpsController {
    constructor(private service: NpsService) {
    }

    @Post('/create')
    @HttpCode(200)
    async create(@Body() body: CreateNPSDto) {
        return await this.service.create(body);
    }

    @Post('/find')
    @HttpCode(200)
    async get(@Body() body: any) {
        return await this.service.get(body);
    }
}
