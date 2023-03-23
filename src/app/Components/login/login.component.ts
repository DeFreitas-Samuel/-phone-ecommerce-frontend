import { Component, OnInit } from '@angular/core';
import {UserRegistrationData} from "../../Models/UserRegistrationData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserRegistrationData = new UserRegistrationData();

  constructor() {
  }

  ngOnInit(): void {
  }

  login(){

  }

}
