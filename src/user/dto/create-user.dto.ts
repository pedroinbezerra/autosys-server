import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsDateString,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  profileImage?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsString()
  username?: string;

  @ArrayNotEmpty()
  @IsArray()
  companyId: string[];

  @IsOptional()
  @IsString()
  password?: string;

  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  birthday: Date;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsBoolean()
  phoneIsWhatsapp: boolean;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsDateString()
  passwordExpiration: Date;

  @IsOptional()
  @IsBoolean()
  allowNotifications = true;

  @IsOptional()
  @IsArray()
  permissions: string[];

  @IsNotEmpty()
  @IsString()
  createdBy: string;

  @IsOptional()
  @IsString()
  createdAt?: Date;

  @IsOptional()
  @IsString()
  updatedBy?: string;

  @IsOptional()
  @IsString()
  updatedAt?: Date;
}
