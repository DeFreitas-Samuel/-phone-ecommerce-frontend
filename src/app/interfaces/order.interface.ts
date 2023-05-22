import { CartItem } from "./cart-item.interface";
import { ShippingAddress } from "./shipping-address.interface";


export interface Order {
  user_id: number;
  products: CartItem[];
  total: number;
  payment_method: string;
  last4DigitsOfCard?: string;
  shipping_address: ShippingAddress;
}

