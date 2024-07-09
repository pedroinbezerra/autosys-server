import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schemas/company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema }
    ])
  ],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
