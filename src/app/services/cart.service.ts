import {Injectable} from '@angular/core';
import {CartItem} from '../interfaces/cart-item.interface';
import {BehaviorSubject} from 'rxjs';
import {OPERATOR} from '../constants/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];
  private cartSubject:BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(this.cart);

  constructor() { }

  addElementToCart(itemToBeAdded: CartItem){
    const index = this.cart.findIndex(e => e.product_id === itemToBeAdded.product_id )

    if(index !== -1 ){
      const cartItemToBeModified = this.cart[index];
      cartItemToBeModified.quantity += itemToBeAdded.quantity;
      cartItemToBeModified.totalPrice += itemToBeAdded.totalPrice;

    }
    else{
      this.cart.push(itemToBeAdded);
    }

    this.cartSubject.next(this.cart);
  }

  get getCart(){
    return this.cartSubject.asObservable();
  }

  modifyQuantity(productId: number, operator:OPERATOR ){
    const index = this.cart.findIndex(e => e.product_id === productId )

    if(operator === OPERATOR.ADD){
      const cartItemToBeModified = this.cart[index];

      cartItemToBeModified.quantity++;
      cartItemToBeModified.totalPrice = parseFloat((cartItemToBeModified.totalPrice + cartItemToBeModified.unitPrice).toFixed(2));
      this.cartSubject.next(this.cart);
    }

    if(operator === OPERATOR.SUBTRACT){
      const cartItemToBeModified = this.cart[index];

      if(cartItemToBeModified.quantity === 1){
        return;
      }

      cartItemToBeModified.quantity--;
      cartItemToBeModified.totalPrice = parseFloat((cartItemToBeModified.totalPrice - cartItemToBeModified.unitPrice).toFixed(2));
      this.cartSubject.next(this.cart);
    }

  }

  deleteElementFromCart(productId: number){
    const index = this.cart.findIndex(e => e.product_id === productId )
    const newCart = this.cart.filter( e => e !== this.cart[index]);
    this.cart = newCart;
    this.cartSubject.next(this.cart);
  }

}
