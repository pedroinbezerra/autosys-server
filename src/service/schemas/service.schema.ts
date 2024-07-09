import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

class serviceDescription {
    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    warranty: string;

    @Prop({ required: false })
    off: string;

    @Prop({ required: true })
    cost: string;
}

@Schema()
export class Service {
    @Prop({ required: true })
    document: string;

    @Prop({ required: true })
    plate: string;

    @Prop({ required: true })
    clientId: string;

    @Prop({ required: true })
    companyId: string;

    @Prop({ required: true })
    vehicleId: string;

    @Prop({ required: true })
    paymentForm: string;

    @Prop({ required: false })
    paymentDetail: string;

    @Prop({ required: true})
    description: serviceDescription;

    @Prop({ required: true })
    active: boolean;

    @Prop({ required: true })
    createdBy: string;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: false })
    updatedBy: string;

    @Prop({ required: false })
    updatedAt: Date;
}

export interface Service {
    document: string;
    plate: string;
    clientId: string;
    companyId: string;
    vehicleId: string;
    paymentForm: string;
    paymentDetail: string;
    description: serviceDescription;
    active: boolean;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);