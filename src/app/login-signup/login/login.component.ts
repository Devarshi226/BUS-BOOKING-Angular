import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm! : FormGroup;
  eyeIcon: string = 'fa-eye-slash'
  visibility: string = 'hidden';
  type: string = "password";
  isText: boolean = false;
    ForgotForm: any;

  constructor(private fb:FormBuilder ,
                        private route: Router, private FirebaseAuth: AuthenticationService ){}
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })

    }

    onLogin(){
      if(this.loginForm.valid){
        this.FirebaseAuth.signIn({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
        }).subscribe(()=>{
          this.FirebaseAuth.sendtoken()
          this.route.navigate(['']);
          localStorage.setItem('email', this.loginForm.value.email);
        },error => {
          this.route.navigate(['login']);
           console.log("Invalid Email or Password");
        })
        console.log('Login')
        console.log(this.loginForm.value);
      }
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
