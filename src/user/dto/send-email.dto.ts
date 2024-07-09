import { IsNotEmpty, IsString } from "class-validator";

export class SendEmailDto {
    @IsNotEmpty()
    @IsString()
    to: string;

    @IsNotEmpty()
    @IsString()
    subject: string;

    @IsNotEmpty()
    @IsString()
    html: string
}
