import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  ForgotForm!: FormGroup;
  isRecoveringpassword: boolean = false;

  constructor( private route:Router , private fb:FormBuilder){
    // this.ForgotForm = this.fb.group({
    //   username:['']
    // })
  }
  ngOnInit() {
    this.ForgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    console.log(this.ForgotForm);
  }

  recoverPassword(){
  //   if (this.ForgotForm.valid) {


  //     this.auth.forgotPassword(this.ForgotForm.value).subscribe((res:any) => {
  //       console.log("res", res);
  //       this.route.navigate(['/reset']);
  //     })
  //    }
   }
}
