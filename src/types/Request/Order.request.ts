export interface SaveReqORDER{
    
    orderQty: number;
    productId: string;
    orderStatus: string;
    address: string;
    orderAmount: number;
    totalAmount: number;
  }
  export interface UpdateReqORDER {
    _id:string;
    orderQty: number;
    productId: string;
    orderStatus: string;
    address: string;
    orderAmount: number;
    totalAmount: number;
  }
  export interface GetORDER {
    id: string
  }
  export interface DeleteORDER {
    id: string
  }
  export interface OrderListReqORDER {
    _id:string;
    orderQty: number;
    productId: string;
    orderStatus: string;
    address: string;
    orderAmount: number;
    totalAmount: number;
  }