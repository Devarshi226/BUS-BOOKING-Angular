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
import { BookingComponent } from './Components/booking/booking.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'', component:HomepageComponent},
  {path:'about', component:AboutusComponent},
  {path:'contact', component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'bus-schedule', component:BusScheduleComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'error', component:ErrorComponent},
  {path:'search', component:BusSearchDataComponent},
  {path:'seatselaction', component:SeatSelectionComponent, canActivate: [authGuard] },
  {path:'booking', component:BookingComponent, canActivate: [authGuard] },
  {path: 'payment', component:PaymentComponent, canActivate: [authGuard] },
  { path: 'ticket', component:TicketComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/error' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
