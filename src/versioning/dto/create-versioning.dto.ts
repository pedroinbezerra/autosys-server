import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsDateString,
  IsBoolean,
  IsArray,
} from 'class-validator';

export class CreateVersioningDto {
  @IsOptional()
  @IsArray()
  companyId: string[];

  @IsNotEmpty()
  @IsBoolean()
  global: boolean;

  @IsNotEmpty()
  @IsString()
  version: string;

  @IsOptional()
  @IsArray()
  comments: string[];

  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsNotEmpty()
  @IsString()
  createdBy: string;

  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @IsOptional()
  @IsString()
  updatedBy?: string;

  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}
