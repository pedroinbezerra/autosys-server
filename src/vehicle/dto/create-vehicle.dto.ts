import { IsOptional, IsString, IsNotEmpty, IsDateString, IsDate, IsBoolean, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateVehicleDto {
    @IsNotEmpty()
    @IsString()
    clientId: string;

    @ArrayNotEmpty()
    @IsArray()
    companyId: string[];

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsString()
    model: Date;

    @IsNotEmpty()
    @IsString()
    color: string;

    @IsNotEmpty()
    @IsString()
    year: string;

    @IsNotEmpty()
    @IsString()
    plate: string;

    @IsOptional()
    @IsString()
    Observations: string;

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