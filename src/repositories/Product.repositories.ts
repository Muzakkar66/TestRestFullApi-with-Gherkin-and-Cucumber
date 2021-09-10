import { PRODUCTSchema } from '../model/Product.model';
import { IPRODUCT } from '../types/document/Product';
export class MainProduct {


  constructor() {}
  getProduct(_id: string) {
    return PRODUCTSchema.findById(_id);
  }
  SaveProduct(product: IPRODUCT) {
    return new PRODUCTSchema(product).save();
  }
  updateProduct(product: IPRODUCT) {
    return PRODUCTSchema.findByIdAndUpdate(product._id, product, {
      new: true
    });
  }
  deleteProduct(_id: string) {
    return PRODUCTSchema.findByIdAndDelete(_id);
  }
  getProductList() {
   return PRODUCTSchema.find();
  }
}