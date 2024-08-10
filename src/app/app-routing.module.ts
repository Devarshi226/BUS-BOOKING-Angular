import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Reusable-Component/header/header.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { FooterComponent } from './Reusable-Component/footer/footer.component';
import { BusScheduleComponent } from './Components/bus-schedule/bus-schedule.component';
import { LoginComponent } from './login-signup/login/login.component';
import { SignupComponent } from './login-signup/signup/signup.component';
import { ForgotComponent } from './login-signup/forgot/forgot.component';
import { ErrorComponent } from './Components/error/error.component';
import { BusSearchDataComponent } from './Components/bus-search-data/bus-search-data.component';
import { SeatSelectionComponent } from './Components/seat-selection/seat-selection.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'', component:HomepageComponent},
  {path:'footer', component:FooterComponent},
  {path:'bus-schedule', component:BusScheduleComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'error', component:ErrorComponent},
  {path:'search', component:BusSearchDataComponent},
  {path:'seat-selaction', component:SeatSelectionComponent , canActivate: [authGuard]},
  {path:'seatselaction', component:SeatSelectionComponent}
  { path: '**', redirectTo: '/error' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
