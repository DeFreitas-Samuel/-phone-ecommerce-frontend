import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../interfaces/cart-item.interface";
import {CartService} from "../../../services";
import {OPERATOR} from "../../../constants/operators";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() cartItem!: CartItem

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddQuantity(){
    this.cartService.modifyQuantity(this.cartItem.product_id, OPERATOR.ADD);
  }

  onSubtractQuantity(){
    this.cartService.modifyQuantity(this.cartItem.product_id, OPERATOR.SUBTRACT);
  }

  onDeleteItem(){
    console.log("Deleted");
    this.cartService.deleteElementFromCart(this.cartItem.product_id);

  }

}
