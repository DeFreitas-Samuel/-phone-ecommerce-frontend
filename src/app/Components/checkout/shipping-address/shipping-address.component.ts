import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  shippingAddressForm = this.formBuilder.group({
    address: [null, [Validators.required]],
    city: [null, [Validators.required]],
    state: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
    zipCode: [null, [Validators.required, Validators.pattern('[0-9]{5}')]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
