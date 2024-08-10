import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  ForgotForm!: FormGroup;
  isRecoveringpassword: boolean = false;

  constructor( private route:Router , private fb:FormBuilder, private FirebaseAuth: AuthenticationService) {

  }
  ngOnInit() {
    this.ForgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    console.log(this.ForgotForm);
  }

  recoverPassword(){
   if (this.ForgotForm.valid) {
    this.isRecoveringpassword=true;
    this.FirebaseAuth.forgotPassword(this.ForgotForm.value.email).subscribe(()=>{
      this.isRecoveringpassword = false
    })
   }
  }
}
