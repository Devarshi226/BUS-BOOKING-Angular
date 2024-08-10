import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signinForm!: FormGroup;
  roleUser: any;
  uid:string = ''
  eyeIcon: string = 'fa-eye-slash'
  visibility: string = 'hidden';
  type: string = "password"
  isText: boolean = false;


  constructor( private fb:FormBuilder, private route:Router, private fireauth: AuthenticationService){}
   ngOnInit(){
     this.signinForm = this.fb.group({
       userName:['', [Validators.required]],
       password:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ]],
       email: ['', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]],
       mobileNo:['',[Validators.required]],
       role:['user']

     })

   }
   get f(){
    return this.signinForm.controls;
  }
  onSubmit(): void{
    this.fireauth.signUp({
      Email: this.signinForm.value.email,
      password: this.signinForm.value.password
    }).subscribe((userCredential)=>{
      this.uid = userCredential.user.uid;
      localStorage.setItem('uid',this.uid);
      this.signinForm.reset();
      this.route.navigate(['login']);


      // this.dataservice.sendUserdata({
      //   userName: this.signUpForm.value.userName,
      //   role: this.signUpForm.value.role,
      //   mobileNo: this.signUpForm.value.mobileNo,

      // })
    }, (error:any) => {
      console.error(error);
    });



      }
      hideShowPass() {
        this.isText = !this.isText;
        this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
        this.isText ? this.type = "text" : this.type = "password"

      }
      toggleEyeIconVisibility() {

        this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';

      }
}
