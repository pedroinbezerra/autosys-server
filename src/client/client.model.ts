export interface Client {
    _id?: string;
    companyId: string[];
    active: boolean;
    document: string;
    name: string;
    birthday: Date;
    phone: string;
    phoneIsWhatsapp: boolean;
    email: string;
    address: {
        zipcode: number;
        place: string;
        number: number;
        complement: string;
    };
    createdBy: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}