import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { loginsignupComponent } from './login-signup.component';



@NgModule({
  declarations: [
    loginsignupComponent,
ForgotComponent,
LoginComponent,
SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
ReactiveFormsModule,
    LoginSignupRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class loginSignupModule { }
