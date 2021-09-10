import { ORDERSchema } from '../model/Order.model';
import { IORDER } from '../types/document/Order';
export class MainOrder {


  constructor() {}
  getOrder(_id: string) {
    return ORDERSchema.findById(_id);
  }
  SaveOrder(order: IORDER) {
    return new ORDERSchema(order).save();
  }
  updateOrder(order: IORDER) {
    return ORDERSchema.findByIdAndUpdate(order._id, order, {
      new: true
    });
  }
  deleteOrder(_id: string) {
    return ORDERSchema.findByIdAndDelete(_id);
  }
  getOrdersList() {
   return ORDERSchema.find();
  }
}