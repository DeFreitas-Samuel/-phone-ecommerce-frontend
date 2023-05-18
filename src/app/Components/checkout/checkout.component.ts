import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  creditCardFormValidity:boolean = false
  shippingAddressFormValidity: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onStatusChangedOnCreditCardForm(event:string ) {
    if(event === 'VALID'){
      this.creditCardFormValidity = true;
    }
    else{
      this.creditCardFormValidity = false;
    }
  }
  onStatusChangedOnShippingAddressForm(event:string ) {
    if(event === 'VALID'){
      this.shippingAddressFormValidity = true;
    }
    else{
      this.shippingAddressFormValidity = false;
    }
  }

  get isButtonDisabled(){
    return this.creditCardFormValidity && this.shippingAddressFormValidity;
  }

  onPurchase(){

  }
}
