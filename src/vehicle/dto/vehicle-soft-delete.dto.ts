import { IsNotEmpty, IsString } from "class-validator";

export class vehicleSoftDeleteDto {
    @IsNotEmpty()
    @IsString()
    _id: string;
}