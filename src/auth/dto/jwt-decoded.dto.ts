import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class JwtDecodedDto {
    @IsNotEmpty()
    @IsString()
    sub!: string;

    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsNotEmpty()
    @IsNumber()
    iat!: number;
}