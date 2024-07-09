import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateClientPasswordDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString() 
    updatedBy?: string;
    
    @IsOptional()
    @IsDateString() 
    updatedAt?: Date;
}