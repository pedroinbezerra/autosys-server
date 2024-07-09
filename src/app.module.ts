import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { ServiceModule } from './service/service.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
import { JwtModule } from '@nestjs/jwt';
import { AppService } from './app.service';
import { VersioningModule } from './versioning/versioning.module';
import { NpsModule } from './nps/nps.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://autosys:MZYPs3O1pbP8ESAc@autosys.icde4et.mongodb.net'),
    AuthModule,
    ClientModule,
    VehicleModule,
    ServiceModule,
    UserModule,
    CompanyModule,
    JwtModule,
    VersioningModule,
    NpsModule
  ],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule { }
