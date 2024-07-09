import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {

    @Prop({ required: true })
    clientId: string;

    @Prop({ required: false })
    companyId: Array<string>;

    @Prop({ required: true })
    brand: string;

    @Prop({ required: true })
    model: string;

    @Prop({ required: true })
    color: string;

    @Prop({ required: true })
    year: string;

    @Prop({ required: true })
    plate: string;

    @Prop({ required: false })
    Observations: string;

    @Prop({required: true})
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

export interface Vehicle {
    clientId: string;
    companyId: Array<string>;
    brand: string;
    model: string;
    color: string;
    year: string;
    plate: string;
    Observations: string;
    active: boolean;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);