import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';



const routes: Routes = [
      {path:'forgot', component: ForgotComponent},
      {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSignupRoutingModule {}
