import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserPasswordDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsDateString()
    passwordExpiration?: Date;
}