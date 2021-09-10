import express from 'express';
import { AdminRoutesApi } from "./Admin.Routes";
import { ProductRoutesApi } from "./Product.Routes";
 import { OrderRoutesApi } from "./Order.Routes";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/admin',AdminRoutesApi);
        this.router.use('/Product',ProductRoutesApi);
         this.router.use('/order',OrderRoutesApi);

    }


}
export const MainApi = new MainRouter().router;