import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  shippingAddressForm = this.formBuilder.group({
    address1: [null, [Validators.required]],
    city: [null, [Validators.required]],
    state: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    zipCode: [null, [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
