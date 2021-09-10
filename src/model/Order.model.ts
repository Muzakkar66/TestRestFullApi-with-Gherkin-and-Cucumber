import { Schema, model } from 'mongoose';
import { IORDER } from '../types/document/Order';
const IORDERSchema = new Schema(
    {
        orderQty: { 
            type: Number,
            required:true
            },
        productId:{
                   type: Schema.Types.ObjectId,
                   ref: 'PrductSchema',
                   required:true
            },

        orderStatus: {
             type: String,
             required: true,
             default: "inProcess"
          },
        address: {
             type: String,
             required: true,
            
          },

        orderAmount:{
            type:Number,
            required: true
        },

        totalAmount:{
            type:Number,
            required:true
        }
    },
  { timestamps: true }
);
export const ORDERSchema = model<IORDER>('IORDERSchema', IORDERSchema);