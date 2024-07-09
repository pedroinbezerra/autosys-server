import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ServiceDescription {
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    warranty: string;

    @IsOptional()
    @IsString()
    off: string;

    @IsNotEmpty()
    @IsString()
    cost: string;
}