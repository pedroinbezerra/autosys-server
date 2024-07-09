import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NPSDocument = HydratedDocument<NPS>;

@Schema()
export class NPS {
    @Prop({ required: true })
    number: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    note: number;

    @Prop({ required: false })
    companyId: string;

    @Prop({ required: false })
    createdAt?: Date;
}

export interface NPS {
    number: string;
    name: string;
    note: number;
    companyId: string;
    createdAt?: Date;
}

export const NPSSchema = SchemaFactory.createForClass(NPS);