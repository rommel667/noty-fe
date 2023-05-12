import { IField } from './field.interface';

export interface IItem {
  id?: number;
  fieldId: number | string;
  fieldValue: string;
  fieldName: string;
  field?: IField;
  createdAt?: Date;
  updatedAt?: Date;
}
