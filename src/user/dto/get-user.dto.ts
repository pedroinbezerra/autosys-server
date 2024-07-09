import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
} from 'class-validator';

export class GetUserDto {
  @IsOptional()
  @IsString()
  document?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDateString()
  birthday?: Date;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsBoolean()
  phoneIsWhatsapp?: boolean;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  cep?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsDateString()
  passwordExpiration: Date;

  @IsOptional()
  @IsBoolean()
  allowNotifications: boolean;

  @IsOptional()
  @IsArray()
  permissions: string[];

  @IsOptional()
  @IsString()
  createdBy?: string;

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
