import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { VersioningService } from './versioning.service';
import { CreateVersioningDto } from './dto/create-versioning.dto';
import { UpdateVersioningDto } from './dto/update-versioning.dto';
import { VersioningSoftDeleteDto } from './dto/versioning-soft-delete.dto';
import { FindVersioningDto } from './dto/find-versioning.dto';

@Controller('versioning')
@UseGuards(new AuthGuard('t]bJ#8Nb0QI#&yr%imoX-Js'))
export class VersioningController {
  constructor(private service: VersioningService) {}

  @Post('/find')
  @HttpCode(200)
  async get(@Body() body: FindVersioningDto) {
    return await this.service.get(body);
  }

  @Post()
  @HttpCode(200)
  async create(@Body() body: CreateVersioningDto) {
    return await this.service.create(body);
  }

  @Patch()
  @HttpCode(200)
  async update(@Body() body: UpdateVersioningDto) {
    return await this.service.update(body);
  }

  @Delete()
  @HttpCode(200)
  async delete(@Body() body: VersioningSoftDeleteDto) {
    return await this.service.softDelete(body);
  }
}
