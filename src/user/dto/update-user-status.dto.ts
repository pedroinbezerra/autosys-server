import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserStatusDto {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    enabled: boolean;
}