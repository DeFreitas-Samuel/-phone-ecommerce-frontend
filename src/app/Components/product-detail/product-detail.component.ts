import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { AuthService, ProductsService, PurchaseService } from 'src/app/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$!: Observable<Product>;
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private productService: ProductsService, private purchaseService: PurchaseService, private authService: AuthService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id']
    this.product$ = this.productService.getOneProduct(productId);


  }
  onAddToCart(){
    console.log(this.product$)
  }

  onAddQuantity(){
    this.quantity++;
  }

  onSubstractQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
    
  }

    // onBuyNow(){
  //   const order: Order = {
  //     product_id: this.id,
  //     user_id: this.authService.currentLoggedUserSnapshot?.id ?? -1,
  //     quantity: 1,
  //     total:  Number(this.price)

  //   }
  //   if(order.user_id !== -1){
  //     this.purchaseService.purchase(order).subscribe(console.log)
  //   }
  //   else {
  //     console.error("You have to be logged in to buy!");
  //   }

  // }

}
