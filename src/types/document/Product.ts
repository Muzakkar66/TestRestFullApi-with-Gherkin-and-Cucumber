import { Document } from 'mongoose';
export interface IPRODUCT extends Document {
  _id:string;
  VendorId: number;
  PizzaName: string;
  PizzaDescrpation: string;
  PizzaPrice: number;
  
}