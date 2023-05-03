import { CartItem } from "./cart-item.interface";


export interface Order {
  user_id: number;
  products: CartItem[];
  total: number;
  payment_method_id: number;
  shipping_address: string;
}

