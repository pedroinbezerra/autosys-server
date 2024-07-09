import { IsNotEmpty, IsString } from 'class-validator';

export class VersioningSoftDeleteDto {
  @IsNotEmpty()
  @IsString()
  _id: string;
}
