import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VersioningDocument = HydratedDocument<Versioning>;

@Schema()
export class Versioning {
  @Prop({ required: false })
  companyId: Array<string>;

  @Prop({ required: false })
  global: boolean;

  @Prop({ required: true })
  version: string;

  @Prop({ required: false })
  comments: Array<string>;

  @Prop({ required: true })
  active: boolean;

  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: false })
  createdAt: Date;

  @Prop({ required: false })
  updatedBy: string;

  @Prop({ required: false })
  updatedAt: Date;
}

export interface Versioning {
  companyId: string[];
  global: boolean;
  version: string;
  comments: string[];
  active: boolean;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
}

export const VersioningSchema = SchemaFactory.createForClass(Versioning);
