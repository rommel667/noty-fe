export interface IItem {
  id: number;
  title: string;
  description?: string;
  url?: string;
  code?: string;
  date?: Date;
  password?: string;
  completed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
