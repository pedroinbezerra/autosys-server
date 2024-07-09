import {
  IsBoolean,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsDateString,
  IsArray,
} from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsOptional()
  @IsString()
  profileImage?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsArray()
  companyId: string[];

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsString()
  document?: string;

  @IsOptional()
  @IsString()
  password?: string;

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
  @IsArray()
  permissions: string[];

  @IsOptional()
  @IsBoolean()
  allowNotifications: boolean;

  @IsNotEmpty()
  @IsString()
  updatedBy?: string;

  @IsOptional()
  @IsString()
  updatedAt?: Date;
}
