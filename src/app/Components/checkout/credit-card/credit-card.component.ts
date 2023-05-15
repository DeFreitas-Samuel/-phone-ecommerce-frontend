import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  creditCardForm = this.formBuilder.group({
    cardHolderName: [null, Validators.required],
    cardNumber: [null, [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    expirationDate: [null, [Validators.required, Validators.pattern('^[0-9]{4}$')]],
    cvv: [null, [Validators.required, Validators.pattern('^[0-9]{4}$')]]
  })


  ngOnInit(): void {
  }

}
