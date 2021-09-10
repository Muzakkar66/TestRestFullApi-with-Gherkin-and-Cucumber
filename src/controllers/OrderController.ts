import { IORDER } from '../types/document/Order';
import { MainOrder } from '../repositories/Order.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Security, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResORDER } from '../types/response/Order.response';
import { DeleteORDER, GetORDER, SaveReqORDER, UpdateReqORDER,OrderListReqORDER } from '../types/request/Order.request';

@Route('order')
@Tags('PizzaOrders')
export class OrderController {
  constructor() { }
  //Get Single order
  @Security("jwt", ["admin"])
  @Post("/getOrder")
  async getOrder(@Body() getreq:GetORDER): Promise<SaveUpdateResORDER> {
    const order = await new MainOrder().getOrder(getreq.id);
    console.log(order);
    if (order === null) throw new CustomeError(404, 'Order not found');
    return <SaveUpdateResORDER>order;
  }
   //Place or save order
  @Post('/saveOrder')
  async SaveOrder(@Body() order: SaveReqORDER): Promise<SaveUpdateResORDER> {
    const new_order:IORDER = await new MainOrder().SaveOrder(<IORDER>order);
    return <SaveUpdateResORDER>(new_order);
  }
  //update order
  @Put('/updateOrder')
  async updateOrder(@Body() order: UpdateReqORDER): Promise<SaveUpdateResORDER> {
    const update_order= await new MainOrder().updateOrder(<IORDER>(order));
    if (update_order === null)
      throw new CustomeError(400, 'Order not updated');
    return <SaveUpdateResORDER>update_order;
  }
  //delete order
  @Delete('/deleteOrder')
  @SuccessResponse("200","Order deleted Successfully")
  async deleteOrder(@Body() delreq: DeleteORDER) {
    return await new MainOrder().deleteOrder(delreq.id);
  }
  //get List of order
  @Get('/getOrderList')
  async getOrdersList(): Promise<OrderListReqORDER[]> {
    const order = await new MainOrder().getOrdersList();
    return <OrderListReqORDER[]>(order);
  }
}