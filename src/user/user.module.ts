import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema }
    ])
  ],
  providers: [UserService, AppService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
