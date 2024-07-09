import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsDateString,
  IsBoolean,
  IsArray,
} from 'class-validator';

export class UpdateVersioningDto {
  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsOptional()
  @IsArray()
  companyId: string[];

  @IsOptional()
  @IsBoolean()
  global: boolean;

  @IsOptional()
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
  updatedBy?: string;

  @IsNotEmpty()
  @IsDateString()
  updatedAt = new Date().toISOString();
}
