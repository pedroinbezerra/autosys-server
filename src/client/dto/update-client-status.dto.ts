import { ArrayNotEmpty, IsArray, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum ClientStatus {
    ENABLE = 'enable',
    DISABLE = 'disable'
}

export class updateStatusAction {
    @IsNotEmpty()
    @IsString()
    @IsEnum(ClientStatus)
    action: ClientStatus;
}
export class UpdateClientStatusDto {
    @IsString()
    @IsNotEmpty()
    _id: string;

    @IsOptional()
    @IsArray()
    companyId: string[];

    @IsNotEmpty()
    @IsString() 
    updatedBy?: string;
    
    @IsOptional()
    @IsDateString() 
    updatedAt?: Date;
}