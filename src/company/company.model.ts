export interface Company {
    _id?: string;
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