export interface SaveReqPRODUCT{
    VendorId: number;
    PizzaName: string;
    PizzaDescrpation: string;
    PizzaPrice: number;
  }
  export interface UpdateReqPRODUCT {
    _id: string;
    VendorId: number;
    PizzaName: string;
    PizzaDescrpation: string;
    PizzaPrice: number;
  }
  export interface GetProduct {
    id: string
  }
  export interface DeleteProduct {
    id: string
  }
  export interface ProductListReqPRODUCT {
    _id: string;
    VendorId: number;
    PizzaName: string;
    PizzaDescrpation: string;
    PizzaPrice: number;
  }