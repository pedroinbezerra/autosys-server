class serviceDescription {
    description: string;
    warranty: string;
    off?: string;
    cost: string;
}
export interface Service {
    _id?: string;
    document: string;
    companyId: string;
    plate: string;
    clientId: string;
    vehicleID: string;
    paymentForm: string;
    paymentDetail: string;
    description: serviceDescription;
    active: boolean;
    createdBy: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}