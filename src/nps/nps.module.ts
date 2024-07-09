import { Module } from '@nestjs/common';
import { NpsService } from './nps.service';
import { NpsController } from './nps.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NPSSchema } from './schemas/nps.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'NPS', schema: NPSSchema }
    ])
  ],
  providers: [NpsService],
  controllers: [NpsController]
})
export class NpsModule {}
