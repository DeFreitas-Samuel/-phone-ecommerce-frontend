import { Component, OnInit } from '@angular/core';
import {UserRegistrationData} from "../../models/UserRegistrationData";
import {AuthService} from "../../services";
import {UserLoginData} from "../../models/UserLoginData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserLoginData = new UserLoginData();

  errorMessage: string = '';

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  login(){
    this.auth.Login(this.user);
  }

  logout(){
    this.auth.Logout();
  }

}
