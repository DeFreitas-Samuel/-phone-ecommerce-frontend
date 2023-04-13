import { Component, OnInit } from '@angular/core';
import {UserRegistrationData} from "../../Models/UserRegistrationData";
import {AuthService} from "../../Services";
import {UserLoginData} from "../../Models/UserLoginData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserLoginData = new UserLoginData();

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
