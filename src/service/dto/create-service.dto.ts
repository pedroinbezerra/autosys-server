import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { ServiceDescription } from "./service-description.dto";

enum PaymentForm {
    CREDIT = 'CREDIT',
    DEBIT = 'DEBIT',
    PIX = 'PIX',
    CHEQUE = 'CHEQUE',
    CASH = 'CASH'
}

export class CreateserviceDto {
    @IsOptional()
    @IsString()
    companyId: string;

    @IsNotEmpty()
    @IsString()
    document: string;

    @IsNotEmpty()
    @IsString()
    plate: string;

    @IsNotEmpty()
    @IsString()
    clientId: string;

    @IsNotEmpty()
    @IsString()
    vehicleId: string;

    @IsNotEmpty()
    @IsEnum(PaymentForm)
    paymentForm: PaymentForm;

    @IsOptional()
    @IsString()
    paymentDetail: string;

    @IsNotEmpty()
    @IsObject({ each: true })
    @Type(() => ServiceDescription)
    description: ServiceDescription[];

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsNotEmpty()
    @IsString()
    createdBy: string;

    @IsOptional()
    @IsDateString()
    createdAt: string;

    @IsOptional()
    @IsString()
    updatedBy: string;

    @IsOptional()
    @IsDateString()
    updatedAt: string;
}