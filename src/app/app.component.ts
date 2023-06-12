import { Component, OnInit } from '@angular/core';
import { AuthService, CartService } from './services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor( private authService: AuthService, private cartService: CartService) {}


  ngOnInit() {
    this.authService.checkSessionStorageForUser();
    this.cartService.checkLocalStorageForPreviousCart();
  }

}
