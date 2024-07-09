import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientSchema } from './schemas/client.schema';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Client', schema: ClientSchema }
    ]),
  ],
  providers: [ClientService, AppService],
  controllers: [ClientController],
})
export class ClientModule {}
