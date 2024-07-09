import { IsBoolean, IsOptional, IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    _id?: string;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsBoolean()
    active?: boolean;

    @IsOptional()
    @IsString()
    document?: string;

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
    @IsString() 
    updatedBy?: string;

    @IsOptional()
    @IsString() 
    updatedAt?: Date;
}