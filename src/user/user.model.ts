export interface User {
  _id?: string;
  username: string;
  companyId: string[];
  profileImage: string;
  password?: string;
  active: boolean;
  document: string;
  name: string;
  birthday: Date;
  phone: string;
  phoneIsWhatsapp: boolean;
  email: string;
  cep: string;
  address: string;
  passwordExpiration: Date;
  allowNotifications: boolean;
  permissions: string[];
  createdBy: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}
