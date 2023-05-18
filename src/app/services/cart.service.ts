import {Injectable} from '@angular/core';
import {CartItem} from '../interfaces/cart-item.interface';
import {BehaviorSubject} from 'rxjs';
import {OPERATOR} from '../constants/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private total: number = 0;
  private cart: CartItem[] = [];
  private cartSubject:BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(this.cart);
  private cartTotalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.total)

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
    this.recalculateTotal();
  }

  get getCart(){
    return this.cartSubject.asObservable();
  }

  get cartTotal(){
    return this.cartTotalSubject.asObservable();

  }

  recalculateTotal(){
    const newTotal = this.cart.reduce((total, nextItem) =>  total + nextItem.totalPrice, 0);
    this.cartTotalSubject.next(newTotal);
  }

  modifyQuantity(productId: number, operator:OPERATOR ){
    const index = this.cart.findIndex(e => e.product_id === productId )

    if(operator === OPERATOR.ADD){
      const cartItemToBeModified = this.cart[index];

      cartItemToBeModified.quantity++;
      cartItemToBeModified.totalPrice = parseFloat((cartItemToBeModified.totalPrice + cartItemToBeModified.unitPrice).toFixed(2));
      this.cartSubject.next(this.cart);
      this.recalculateTotal();
    }

    if(operator === OPERATOR.SUBTRACT){
      const cartItemToBeModified = this.cart[index];

      if(cartItemToBeModified.quantity === 1){
        return;
      }

      cartItemToBeModified.quantity--;
      cartItemToBeModified.totalPrice = parseFloat((cartItemToBeModified.totalPrice - cartItemToBeModified.unitPrice).toFixed(2));
      this.cartSubject.next(this.cart);
      this.recalculateTotal();
    }

  }

  deleteElementFromCart(productId: number){
    const index = this.cart.findIndex(e => e.product_id === productId )
    const newCart = this.cart.filter( e => e !== this.cart[index]);
    this.cart = newCart;
    this.cartSubject.next(this.cart);
    this.recalculateTotal();
  }

}
