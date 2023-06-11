import { Component, OnInit } from '@angular/core';
import {AuthService, CartService} from "./services";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'phone-ecommerce-frontend';
  isLoggedIn: boolean = false;
  authSubscription: Subscription | undefined;

  constructor( private auth: AuthService, private cartService: CartService) {

  }


  ngOnInit(){
    this.auth.checkSessionStorageForUser();
    this.cartService.checkLocalStorageForPreviousCart();
    this.authSubscription = this.auth.loggedInUser.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
    
    
  }


  logout(){
    this.auth.logout().subscribe();
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
