import { Module } from '@nestjs/common';
import { VersioningService } from './versioning.service';
import { VersioningController } from './versioning.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VersioningSchema } from './schemas/versioning.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Versioning', schema: VersioningSchema },
    ]),
  ],
  providers: [VersioningService],
  controllers: [VersioningController],
})
export class VersioningModule {}
