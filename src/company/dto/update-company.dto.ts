import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCompanyDto {
    @IsNotEmpty()
    @IsString()
    _id: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    image?: string;

    @IsOptional()
    @IsString()
    document: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsString()
    Observations: string;

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