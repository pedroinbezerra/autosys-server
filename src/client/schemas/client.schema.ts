import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

class Address {
    @Prop({ required: true })
    zipcode: number;

    @Prop({ required: true })
    place: string;

    @Prop({ required: true })
    number: number;

    @Prop({ required: false })
    complement: string;
}

@Schema()
export class Client {
    @Prop({ required: true })
    active: boolean;

    @Prop({ required: true })
    document: string;

    @Prop({ required: false })
    companyId: string[];

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    birthday: Date;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    phoneIsWhatsapp: boolean;

    @Prop({ required: false })
    email: string;

    @Prop({ required: true })
    address: Address;

    @Prop({ required: true })
    createdBy: string;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: false })
    updatedBy: string;

    @Prop({ required: false })
    updatedAt: Date;
}

export interface Client {
    document: string;
    companyId: string[];
    name: string;
    birthday: Date;
    phone: string;
    phoneIsWhatsapp: boolean;
    email: string;
    address: Address;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
}

export const ClientSchema = SchemaFactory.createForClass(Client);