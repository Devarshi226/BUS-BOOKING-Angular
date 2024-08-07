import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Reusable-Component/header/header.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { FooterComponent } from './Reusable-Component/footer/footer.component';
import { BusScheduleComponent } from './Components/bus-schedule/bus-schedule.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'', component:HomepageComponent},
  {path:'footer', component:FooterComponent},
  {path:'bus-schedule', component:BusScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
