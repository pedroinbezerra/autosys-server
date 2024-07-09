import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, IsDateString, IsNotEmpty, IsDate, IsArray, IsObject, ArrayNotEmpty } from 'class-validator';
import { Address } from './address';

export class UpdateClientDto {
    @IsNotEmpty()
    @IsString()
    _id: string;

    @IsOptional()
    @IsArray()
    companyId: string[];

    @IsOptional()
    @IsString()
    document: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsDateString()
    birthday: Date;

    @IsOptional()
    @IsString()
    phone: string;

    @IsOptional()
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
    updatedBy?: string;

    @IsOptional()
    @IsDateString()
    updatedAt?: Date;
}