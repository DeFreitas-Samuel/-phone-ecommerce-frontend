import { Component, OnInit } from '@angular/core';
import {UserRegistrationData} from "../../models/UserRegistrationData";
import {AuthService} from "../../services";
import {UserLoginData} from "../../models/UserLoginData";
import { HttpErrorResponse } from '@angular/common/http';

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
    this.auth.login(this.user).subscribe({
      error: (next:HttpErrorResponse) => this.errorMessage = next.error.error,
      complete: () => console.log('Hallelujah')
    });
  }

  logout(){
    this.auth.logout().subscribe();
  }


}
