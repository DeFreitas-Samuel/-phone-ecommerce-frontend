import { Component } from '@angular/core';
import {AuthService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phone-ecommerce-frontend';
  isLoggedIn: boolean = false

  constructor( private auth: AuthService) {
    if(auth.currentLoggedUser) {
      this.isLoggedIn = true;
      console.log(auth.currentLoggedUser)
    }
  }
}
