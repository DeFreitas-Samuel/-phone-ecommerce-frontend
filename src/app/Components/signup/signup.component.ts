import { Component, OnInit } from '@angular/core';
import {UserRegistrationData} from "../../models/UserRegistrationData";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: UserRegistrationData = new UserRegistrationData();
  signUpForm: FormGroup = this.formBuilder.group({
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    birthdate: [null, [Validators.required]],
    email: [null, [Validators.email, Validators.required]],
    password: [null,  [/*[Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),*/ Validators.required]]
  })
  errorMessage:string = '';

  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {

  }

  signUp(){
    this.user.firstname = this.signUpForm.get('firstname')?.value;
    this.user.lastname = this.signUpForm.get('lastname')?.value;
    this.user.birthdate = this.signUpForm.get('birthdate')?.value;
    this.user.email = this.signUpForm.get('email')?.value;
    this.user.password = this.signUpForm.get('password')?.value;

    const observer = {
      error: (next:HttpErrorResponse) => this.errorMessage = next.error.error,
      complete: () => this.router.navigate(['home'])
    };
    this.auth.signUp(this.user.toDTO()).subscribe(observer);
  }

}
