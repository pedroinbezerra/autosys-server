import { IsArray, IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateVehicleDto {
    @IsNotEmpty()
    @IsString()
    _id: string;

    @IsOptional()
    @IsString()
    clientId: string;

    @IsOptional()
    @IsArray()
    companyId: string[];

    @IsOptional()
    @IsString()
    brand: string;

    @IsOptional()
    @IsString()
    model: Date;

    @IsOptional()
    @IsString()
    color: string;

    @IsOptional()
    @IsString()
    year: string;

    @IsOptional()
    @IsString()
    plate: string;

    @IsOptional()
    @IsString()
    Observations: string;

    @IsOptional()
    @IsString() 
    createdBy: string;

    @IsOptional()
    @IsDateString()
    createdAt?: string;

    @IsNotEmpty()
    @IsString() 
    updatedBy?: string;

    @IsOptional()
    @IsDateString()
    updatedAt?: string;
}