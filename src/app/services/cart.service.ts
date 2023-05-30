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

    this.syncCart();
  }

  get cart$(){
    return this.cartSubject.asObservable();
  }

  get cartSnapshot(){
    return this.cartSubject.value;
  }

  get cartTotal$(){
    return this.cartTotalSubject.asObservable();

  }

  get cartTotalSnapshot(){
    return this.cartTotalSubject.value;
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
      this.syncCart()
    }

    if(operator === OPERATOR.SUBTRACT){
      const cartItemToBeModified = this.cart[index];

      if(cartItemToBeModified.quantity === 1){
        return;
      }

      cartItemToBeModified.quantity--;
      cartItemToBeModified.totalPrice = parseFloat((cartItemToBeModified.totalPrice - cartItemToBeModified.unitPrice).toFixed(2));
      this.syncCart()
    }

  }

  deleteElementFromCart(productId: number){
    const index = this.cart.findIndex(e => e.product_id === productId )
    const newCart = this.cart.filter( e => e !== this.cart[index]);
    this.cart = newCart;
    this.syncCart();
  }

  emptyCart(){
    this.cart = [];
    this.syncCart();
  }

  private syncCart(){
    this.cartSubject.next(this.cart);
    this.recalculateTotal();
    localStorage.setItem("shopping_cart", JSON.stringify(this.cart));
  }

  checkLocalStorageForPreviousCart(){
    const shoppingCartString = localStorage.getItem("shopping_cart");
    if(shoppingCartString){
      try {
        this.cart = JSON.parse(shoppingCartString);
        this.syncCart();
      } catch (e) {
        console.error('Error parsing shopping cart data from local storage:', e);
        localStorage.removeItem("shopping_cart");
      }
    }
  }

}
