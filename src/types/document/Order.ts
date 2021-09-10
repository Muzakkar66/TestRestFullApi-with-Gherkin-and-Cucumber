import { Document } from 'mongoose';
export interface IORDER extends Document {
  _id:string;
  orderQty: number;
  productId: string;
  orderStatus: string;
  address: string;
  orderAmount: number;
  totalAmount: number;
}