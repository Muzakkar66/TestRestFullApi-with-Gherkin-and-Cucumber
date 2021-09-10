import express from 'express';
import { OrderController } from '../controllers/OrderController';
import { IORDER } from '../types/document/Order';
import { DeleteORDER, GetORDER, SaveReqORDER, UpdateReqORDER,OrderListReqORDER } from '../types/request/Order.request';
import { SaveUpdateResORDER } from '../types/response/Order.response';
import CustomeError from '../utills/error';
import jwt from 'jsonwebtoken';



// export function expressAuthentication(
//   request: express.Request,
//   securityName: string,
//   scopes?: string[]
// ): Promise<getOrder> {
//   if (securityName === "api_key") {
//     let token;
//     if (request.query && request.query.access_token) {
//       token = request.query.access_token;
//     }

//     if (token === "abc123456") {
//       return Promise.resolve({
//         id: 1,
//         name: "Ironman",
//       });
//     } else {
//       return Promise.reject({});
//     }
//   }

  // if (securityName === "jwt") {
  //   const token =
  //     request.body.token ||
  //     request.query.token ||
  //     request.headers["x-access-token"];

  //   return new Promise((resolve, reject) => {
  //     if (!token) {
  //       reject(new Error("No token provided"));
  //     }
  //     jwt.verify(token, "[secret]", function (err: any, decoded: any) {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         // Check if JWT contains all required scopes
  //         for (let scope of scopes) {
  //           if (!decoded.scopes.includes(scope)) {
  //             reject(new Error("JWT does not contain required scope."));
  //           }
  //         }
  //         resolve(decoded);
  //       }
  //     });
  //   });
  // }
// }




export class ProductRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
      /**
        summary: Get Order by order id
     */
    // Get single order by order id
    this.router.post('/getOrder', async (req, res, next) => {
      try {
        const getreq:GetORDER = req.body;
          const order:SaveUpdateResORDER = await new OrderController().getOrder(getreq);
          res.send(order);
      } catch (error) {
        next(error);
      }
    });
    // Save order by order id
    this.router.post('/saveOrder', async (req, res, next) => {
      try {
        const product: SaveReqORDER = req.body;
        const newOrder:SaveUpdateResORDER = await new OrderController().SaveOrder(product);
        res.status(200).json({
          message: newOrder
        });
      } catch (error) {
        next(error);
      }
    });
    // Update order by order id
    this.router.put('/updateOrder', async (req, res, next) => {
      try {
        const order: UpdateReqORDER = req.body;
        const upadated_order:SaveUpdateResORDER = await new OrderController().updateOrder(order);
        const response = {
            upadated_order,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    // Delete order by order id
    this.router.delete('/deleteOrder', async (req, res, next) => {
      try {
        const delreq:DeleteORDER = req.body;
        const Deleted_order = await new OrderController().deleteOrder(delreq);
        res.status(200).json({
          message: 'Order deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    // Get List of order
    this.router.get('/getOrderList', async (req, res, next) => {
      try {
        const getreq:OrderListReqORDER[] = req.body;
          const order:OrderListReqORDER[] = await new OrderController().getOrdersList();
          console.log(getreq);
          const response = {
            order,
        };
        res.status(200).json({
          message: response
        });
          res.send(order);
      } catch (error) {
        next(error);
      }
    });

  }
}
export const OrderRoutesApi = new ProductRoutes().router;