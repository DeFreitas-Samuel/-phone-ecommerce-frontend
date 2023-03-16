import { Component, OnInit } from '@angular/core';
import {User} from "../Models/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'address1': new FormControl(null, Validators.required),
      'address2': new FormControl(null),
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))
    })
  }

  ngOnInit(): void {

  }

  signUp(){
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }

}
