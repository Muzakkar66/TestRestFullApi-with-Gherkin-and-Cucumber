import { Schema, model } from 'mongoose';
import { IPRODUCT } from '../types/document/Product';
const IPRODUCTSchema = new Schema(
  {
        VendorId:  { type: Number},
        PizzaName: { type: String },
        PizzaDescrpation: { type: String },
        PizzaPrice: { type: Number },
  },
  { timestamps: true }
);
export const PRODUCTSchema = model<IPRODUCT>('IPRODUCTSchema', IPRODUCTSchema);