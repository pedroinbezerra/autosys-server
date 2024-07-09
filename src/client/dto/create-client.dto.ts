import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, IsNotEmpty, IsDateString, IsArray, IsNumber, isNumber, IsObject, ArrayNotEmpty } from 'class-validator';
import { Address } from './address';

export class CreateClientDto {
    @IsNotEmpty()
    @IsString()
    document: string;

    @ArrayNotEmpty()
    @IsArray()
    companyId: string[];

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    active: boolean;

    @IsNotEmpty()
    @IsDateString()
    birthday: Date;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsBoolean()
    phoneIsWhatsapp: boolean;

    @IsOptional()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsObject({ each: true })
    @Type(() => Address)
    address: Address;

    @IsNotEmpty()
    @IsString()
    createdBy: string;

    @IsOptional()
    @IsDateString()
    createdAt?: Date;

    @IsOptional()
    @IsString()
    updatedBy?: string;

    @IsOptional()
    @IsDateString()
    updatedAt?: Date;
}