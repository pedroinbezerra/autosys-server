import {
  IsOptional,
  IsString,
  IsDateString,
  IsBoolean,
  IsArray,
} from 'class-validator';

export class FindVersioningDto {
  @IsOptional()
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

  @IsOptional()
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
