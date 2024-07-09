export interface Versioning {
  _id?: string;
  companyId: string[];
  global: boolean;
  version: string;
  comments: string[];
  active: boolean;
  createdBy: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}
