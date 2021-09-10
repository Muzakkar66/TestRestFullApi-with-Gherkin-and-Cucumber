import express from 'express';
import { ProductController } from '../controllers/ProductController';
import { IPRODUCT } from '../types/document/Product';
import { DeleteProduct, GetProduct, SaveReqPRODUCT, UpdateReqPRODUCT, ProductListReqPRODUCT} from '../types/request/Product.request';
import { SaveUpdateResPRODUCT } from '../types/response/Product.response';
import CustomeError from '../utills/error';

export class ProductRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getProduct', async (req, res, next) => {
      try {
        const getreq:GetProduct = req.body;
          const product:SaveUpdateResPRODUCT = await new ProductController().getProduct(getreq);
          res.send(product);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/saveProduct', async (req, res, next) => {
      try {
        const product: SaveReqPRODUCT = req.body;
        const newProduct:SaveUpdateResPRODUCT = await new ProductController().SaveProduct(product);
        res.status(200).json({
          message: newProduct
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.put('/updateProduct', async (req, res, next) => {
      try {
        const product: UpdateReqPRODUCT = req.body;
        const upadated_product:SaveUpdateResPRODUCT = await new ProductController().updateProduct(product);
        const response = {
            upadated_product,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deleteProduct', async (req, res, next) => {
      try {
        const delreq:DeleteProduct = req.body;
        console.log(delreq)
        const Deleted_product = await new ProductController().deleteProduct(delreq);
        res.status(200).json({
          message: 'Product deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    // Get List of Product
    this.router.get('/getProductList', async (req, res, next) => {
      try {
        const getreq:ProductListReqPRODUCT[] = req.body;
          const product:SaveUpdateResPRODUCT[] = await new ProductController().getProductList();
          console.log(getreq);
          const response = {
            product,
        };
        res.status(200).json({
          message: response
        });
          res.send(product);
      } catch (error) {
        next(error);
      }
    });

  }
}
export const ProductRoutesApi = new ProductRoutes().router;