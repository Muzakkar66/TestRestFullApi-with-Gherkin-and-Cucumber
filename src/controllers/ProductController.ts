import { IPRODUCT } from '../types/document/Product';
import { MainProduct } from '../repositories/Product.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResPRODUCT } from '../types/response/Product.response';
import { DeleteProduct, GetProduct, SaveReqPRODUCT, UpdateReqPRODUCT,ProductListReqPRODUCT } from '../types/request/Product.request';

@Route('product')
@Tags('PizzaItems')
export class ProductController {
  constructor() { }
  
  @Post("/getProduct")
  async getProduct(@Body() getreq:GetProduct): Promise<SaveUpdateResPRODUCT> {
    const product = await new MainProduct().getProduct(getreq.id);
    if (product === null) throw new CustomeError(404, 'Product not found');
    return <SaveUpdateResPRODUCT>product;
  }
  @Post('/saveProduct')
  async SaveProduct(@Body() product: SaveReqPRODUCT): Promise<SaveUpdateResPRODUCT> {
    const new_product:IPRODUCT = await new MainProduct().SaveProduct(<IPRODUCT>product);
    return <SaveUpdateResPRODUCT>(new_product);
  }
  @Put('/updateProduct')
  async updateProduct(@Body() product: UpdateReqPRODUCT): Promise<SaveUpdateResPRODUCT> {
    const update_product= await new MainProduct().updateProduct(<IPRODUCT>(product));
    if (update_product === null)
      throw new CustomeError(400, 'Product not updated');
    return <SaveUpdateResPRODUCT>update_product;
  }
  @Delete('/deleteProduct')
  @SuccessResponse("200","Product deleted Successfully")
  async deleteProduct(@Body() delreq: DeleteProduct) {
    return await new MainProduct().deleteProduct(delreq.id);
  }
  @Get('/getProductList')
  async getProductList(): Promise<ProductListReqPRODUCT[]> {
    const product = await new MainProduct().getProductList();
    return <ProductListReqPRODUCT[]>(product);
  }
}