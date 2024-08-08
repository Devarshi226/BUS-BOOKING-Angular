import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
                        private route: Router){}
    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })

    }

    onLogin(){
      // if (this.loginForm.valid) {
      //   const useremail =   this.loginForm.value.email

      //   this.auth.login(this.loginForm.value).subscribe({
      //     next: (res) => {
      //       this.loginForm.reset();
      //       localStorage.setItem('email', useremail);
      //     },
      //     error: (err) => {

      //       if (err) {
      //         // this.toast.error({
      //         //   detail: 'Error',
      //         //   summary: 'Email or Password is not correct!',
      //         //   duration: 5000,
      //         // });
      //         this.toastr.error('Email or Passeword is not correct!', 'Eroor', {timeOut: 3000,});

      //       }
      //     },
      //   });
      // } else {
      //   this.loginForm.invalid;
      //   // this.toast.error({
      //   //   detail: 'Error',
      //   //   summary: 'Please Enter username And Password!',
      //   //   duration: 5000,
      //   // });
      //   this.toastr.error('Please Enter username And Password!', 'Eroor', {timeOut: 3000,})
      // }


      //Firebase
      // this.fireauth.signIn({
      //   email: this.loginForm.value.username,
      //   password: this.loginForm.value.password
      // }).subscribe(()=>{
      //   this.fireauth.sendtoken()
      //   this.route.navigate(['']);
      //   this.toastr.success( 'Welcome to the FOOD.IO','Login', {timeOut: 3000,});
      //   localStorage.setItem('username', this.loginForm.value.username);
      // },error => {

      //   this.route.navigate(['login']);
      //   this.toastr.error( 'Check Your email or password','Wrong Credential', {timeOut: 3000,});

      // })
      // console.log('register')
      // console.log(this.loginForm.value);
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
