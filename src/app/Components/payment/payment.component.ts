import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm: FormGroup;
  banks: string[] = ['Bank 1', 'Bank 2', 'Bank 3', 'Bank 4', 'Bank 5'];

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardOwner: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryMonth: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      expiryYear: ['', [Validators.required, Validators.min(new Date().getFullYear() % 100)]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      paypalAccount: ['Domestic'],
      bank: ['']
    });
  }


  validateCVV(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '').slice(0, 3);
  }

  validateExpiry(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '').slice(0, 2);
  }

  validateCardNumber(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '').slice(0, 16);
  }


  confirmPayment(): void {
    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value;
      console.log('Payment Confirmed:', paymentData);
      // Handle further payment logic here
    }
  }
}
