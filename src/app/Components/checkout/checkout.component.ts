import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseService } from 'src/app/services';
import { ShippingAddress } from 'src/app/interfaces/shipping-address.interface';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @ViewChild(CreditCardFormComponent, { static: false }) creditCardFormComponent!: CreditCardFormComponent;
  @ViewChild(ShippingAddressComponent, { static: false }) shippingAddressFormComponent!: ShippingAddressComponent;
  creditCardFormStatus: string = 'INVALID';
  shippingAddressFormStatus: string = 'INVALID';
  isLoading: boolean = false;


  paymentTypeForm: FormGroup = this.fb.group({
    paymentType: ['Debit/Credit Card', [Validators.required]]
  })

  constructor(private fb: FormBuilder, 
    private purchaseService: PurchaseService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onStatusChangedOnCreditCardForm(status: string) {
    this.creditCardFormStatus = status;
  }
  onStatusChangedOnShippingAddressForm(status: string) {
    this.shippingAddressFormStatus = status;
  }

  get isButtonDisabled() {
    if (this.paymentTypeForm.get('paymentType')?.value === 'Debit/Credit Card') {
      return this.creditCardFormStatus === 'VALID' && this.shippingAddressFormStatus === 'VALID';
    }
    return this.shippingAddressFormStatus === 'VALID'
  }

  onPurchase() {

    const paymentTypeSelected:string = this.paymentTypeForm.get('paymentType')?.value;
    let last4DigitsOfCard: string = '';

    if(paymentTypeSelected === 'Debit/Credit Card'){
      last4DigitsOfCard = this.creditCardFormComponent.last4DigitsOfCard;
    }
  
    this.isLoading = true;
    const shippingAddress: ShippingAddress | null = this.shippingAddressFormComponent.shippingAddress;

    this.purchaseService.purchase(paymentTypeSelected, last4DigitsOfCard, shippingAddress).subscribe({
      complete: ()=>{
        this.isLoading = false;
        this.router.navigate(['dashboard']);
      },
      error: (response) => {
        console.error(response)
        this.isLoading = false;
      }
    })

    
  }
}
