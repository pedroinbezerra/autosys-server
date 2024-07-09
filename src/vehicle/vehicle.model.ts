export interface Vehicle
 {
    _id?: string;
    clientId: string;
    companyId: string[];
    brand: string;
    model: string;
    color: string;
    year: string;
    plate: boolean;
    active: boolean;
    Observations: string;
    createdBy: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}