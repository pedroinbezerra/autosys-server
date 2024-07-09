import { IsOptional, IsString, IsNotEmpty, IsDateString, IsBoolean } from 'class-validator';

export class CreateCompanyDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    image?: string;

    @IsNotEmpty()
    @IsString()
    document: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsString()
    Observations: string;

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