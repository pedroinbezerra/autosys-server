import {  IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNPSDto {
    @IsNotEmpty()
    @IsString()
    number!: string;

    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsNumber()
    note!: number;  
    
    @IsNotEmpty()
    @IsString()
    companyId!: string;

    @IsNotEmpty()
    @IsDateString()
    createdAt = new Date().toString();
}