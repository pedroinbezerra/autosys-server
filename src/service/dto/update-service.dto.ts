import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import { ServiceDescription } from "./service-description.dto";
import { Type } from "class-transformer";

enum PaymentForm {
    CREDIT = 'CREDIT',
    DEBIT = 'DEBIT',
    PIX = 'PIX',
    CHEQUE = 'CHEQUE',
    CASH = 'CASH'
}

export class UpdateserviceDto {
    @IsNotEmpty()
    @IsString()
    _id: string;

    @IsOptional()
    @IsString()
    companyId: string;

    @IsOptional()
    @IsString()
    document: string;

    @IsOptional()
    @IsString()
    plate: string;

    @IsOptional()
    @IsString()
    clientId: string;

    @IsOptional()
    @IsString()
    vehicleId: string;

    @IsOptional()
    @IsString()
    warranty: string;

    @IsOptional()
    @IsString()
    off: string;

    @IsOptional()
    @IsString()
    cost: string;

    @IsOptional()
    @IsEnum(PaymentForm)
    paymentForm: PaymentForm;

    @IsOptional()
    @IsString()
    paymentDetail: string;

    @IsNotEmpty()
    @IsObject({ each: true })
    @Type(() => ServiceDescription)
    description: ServiceDescription[];

    @IsNotEmpty()
    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsString()
    createdBy: string;

    @IsOptional()
    @IsDateString()
    createdAt: string;

    @IsNotEmpty()
    @IsString()
    updatedBy: string;

    @IsOptional()
    @IsDateString()
    updatedAt: string;
}