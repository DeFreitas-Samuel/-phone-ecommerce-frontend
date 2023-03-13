import { Component, OnInit } from '@angular/core';
import {User} from "../Models/User";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  signUp(){

  }

}
