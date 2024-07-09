import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";

export class RemoveCompanyDto {
    @IsNotEmpty()
    @IsString()
    _id: string;

    @ArrayNotEmpty()
    @IsArray()
    companyId: string[];

    @IsNotEmpty()
    @IsString()
    updatedBy: string;
}