import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Reusable-Component/header/header.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { FooterComponent } from './Reusable-Component/footer/footer.component';
import { BusScheduleComponent } from './Components/bus-schedule/bus-schedule.component';
import { ErrorComponent } from './Components/error/error.component';
import { BusSearchDataComponent } from './Components/bus-search-data/bus-search-data.component';
import { SeatSelectionComponent } from './Components/seat-selection/seat-selection.component';
import { authGuard } from './guards/auth.guard';
import { BookingComponent } from './Components/booking/booking.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactComponent } from './Components/contact/contact.component';
import { loginsignupComponent } from './login-signup/login-signup.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'', component:HomepageComponent},
  {path:'about', component:AboutusComponent},
  {path:'contact', component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'bus-schedule', component:BusScheduleComponent},
  {path:'auth',  component: loginsignupComponent,
    loadChildren:() => import('./login-signup/login-signup.module').then((x) => x.loginSignupModule),
  },
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
