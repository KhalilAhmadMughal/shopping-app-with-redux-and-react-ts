export interface IProduct {
  id: number;
  type: string;
  pic: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  cartPrice: number;
}

export interface ICart {
  cartItems: IProduct[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}
