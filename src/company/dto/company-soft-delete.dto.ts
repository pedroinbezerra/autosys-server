import { IsNotEmpty, IsString } from "class-validator";

export class CompanySoftDeleteDto {
    @IsNotEmpty()
    @IsString()
    _id: string;
}