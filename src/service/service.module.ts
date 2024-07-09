import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema } from './schemas/service.schema';
import { AppService } from 'src/app.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Service', schema: ServiceSchema }
    ])
  ],
  controllers: [ServiceController],
  providers: [ServiceService, AppService]
})
export class ServiceModule { }
