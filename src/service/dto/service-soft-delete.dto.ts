import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ServiceSoftDeleteDto {
    @IsNotEmpty()
    @IsString()
    _id: string;

    @IsNotEmpty()
    @IsString()
    updatedBy: string;

    @IsOptional()
    @IsString()
    companyId: string;
}