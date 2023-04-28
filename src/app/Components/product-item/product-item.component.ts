import {Component, Input, OnInit} from '@angular/core';
import {AuthService, PurchaseService} from "../../services";
import {Order} from "../../interfaces/order.interface";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() id!: number;
  @Input()  name: string ="";
  @Input()  price: string ="";
  @Input() imageUrl: string = "";

  constructor(private purchaseService: PurchaseService, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onPurchase(){
    const order: Order = {
      id_product: this.id,
      id_user: this.authService.currentLoggedUserSnapshot?.id ?? -1,
      quantity: 1,
      total:  Number(this.price)

    }
    if(order.id_user !== -1){
      this.purchaseService.purchase(order).subscribe(console.log)
    }
    else {
      console.error("You have to be logged in to buy!");
    }

  }

}
