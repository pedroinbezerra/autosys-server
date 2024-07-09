import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    image: string;

    @Prop({ required: true })
    document: string;

    @Prop({ required: true })
    active: boolean;

    @Prop({ required: false })
    Observations: string;

    @Prop({ required: true })
    createdBy: string;

    @Prop({ required: false })
    createdAt?: Date;

    @Prop({ required: false })
    updatedBy?: string;

    @Prop({ required: false })
    updatedAt?: Date;
}

export interface Company {
    name: string;
    image: string;
    document: string;
    active: boolean;
    Observations: string;
    createdBy: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);