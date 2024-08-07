import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SelectBusService {
  private Root_url = "https://bdbusticket.firebaseio.com/";


  private routeId= new BehaviorSubject <string> ('');
  castId=this.routeId.asObservable();

  constructor(
      private http: HttpClient,
  ) { }

  getBus(routeId:any) {
     return this.http.get(this.Root_url + 'buses/'+routeId+'.json');
  }

  getRoueId(routeId:any){
      this.routeId.next(routeId)
  }


  getFillupseat(key:any,busID:any){

     return  this.http.get(this.Root_url+'booking/'+key+'/'+busID+'/seat_booking.json')
      //console.log(this.Root_url+'booking/'+key+'/'+busID+'.json')
  }

  getRoute(key:any){
      return  this.http.get(this.Root_url+'routes/'+key+'.json')
  }

}
