import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class GetPermissionDto {
    @IsNotEmpty()
    @IsString()
    _id: string;

    @IsOptional()
    @IsString()
    route: string;

    @IsOptional()
    @IsString()
    companyId: string;
}
