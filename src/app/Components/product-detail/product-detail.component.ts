import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$!: Observable<Product>

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id']
    this.product$ = this.productService.getOneProduct(productId);


  }
  onAddToCart(){
    console.log(this.product$)
  }

}
