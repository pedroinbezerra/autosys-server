import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class Address {
    @IsNotEmpty()
    @IsNumber()
    zipcode!: number;

    @IsNotEmpty()
    @IsString()
    place!: string;

    @IsNotEmpty()
    @IsNumber()
    number!: number;

    @IsOptional()
    @IsString()
    complement?: string;
}