import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  active: boolean;

  @Prop({ required: false })
  profileImage: string;

  @Prop({ required: true })
  document: string;

  @Prop({ required: false })
  companyId: string[];

  @Prop({ required: true })
  username: string;

  @Prop({ required: false })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  birthday: Date;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  phoneIsWhatsapp: boolean;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  cep: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  passwordExpiration: Date;

  @Prop({ required: false })
  allowNotifications: boolean;

  @Prop({ required: false })
  permissions: string[];

  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: false })
  updatedBy: string;

  @Prop({ required: false })
  updatedAt: Date;
}

export interface User {
  document: string;
  companyId: string[];
  permissions: string[];
  profileImage: string;
  name: string;
  birthday: Date;
  phone: string;
  phoneIsWhatsapp: boolean;
  email: string;
  cep: string;
  address: string;
  passwordExpiration: Date;
  allowNotifications: boolean;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
