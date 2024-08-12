import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public seat : number = 1;

  constructor() { }


  // Seats
  private setSubject = new BehaviorSubject<any>(null);

  public setSubject$ = this.setSubject.asObservable();

  setSeat(seat: number){
    this.setSubject.next(seat);
  }



  // Bus Type
  private setBusTypeSubject = new BehaviorSubject<any>(null);

  public setBusTypeSubject$ = this.setBusTypeSubject.asObservable();

  setBusType(busType: string){
    this.setBusTypeSubject.next(busType);
  }


  // Fare
  private setFareSubject = new BehaviorSubject<any>(null);

  public setFareSubject$ = this.setFareSubject.asObservable();

  setFare(fare: number){
    this.setFareSubject.next(fare);
  }


  // // Bus Date
  private setBusDateSubject = new BehaviorSubject<any>(null);

  public setBusDateSubject$ = this.setBusDateSubject.asObservable();

  setBusDate(busDate: string){
    this.setBusDateSubject.next(busDate);
  }

  // source

  private setSourceSubject = new BehaviorSubject<any>(null);

  public setSourceSubject$ = this.setSourceSubject.asObservable();

  setSource(departure: string){
    this.setSourceSubject.next(departure);
  }

  // destination

  private setDestinationSubject = new BehaviorSubject<any>(null);

  public setDestinationSubject$ = this.setDestinationSubject.asObservable();

  setDestination(destination: string){
    this.setDestinationSubject.next(destination);
  }




  // // Total Fare
  // private setTotalFareSubject = new BehaviorSubject<any>(null);

  // public setTotalFareSubject$ = this.setTotalFareSubject.asObservable();

  // setTotalFare(totalFare: number){
  //   this.setTotalFareSubject.next(totalFare);
  // }


  private selectedSeatsSubject = new BehaviorSubject<number[]>([]);
  public selectedSeats$ = this.selectedSeatsSubject.asObservable();

  setSelectedSeats(selectedSeats: number[]) {
    this.selectedSeatsSubject.next(selectedSeats);
  }

  private totalFareSubject = new BehaviorSubject<number>(0);
  public totalFare$ = this.totalFareSubject.asObservable();

  setTotalFare(totalFare: number) {

    this.totalFareSubject.next(totalFare);
  }



    // Bus Details
    private busDetailsSubject = new BehaviorSubject<any>(null);
    public busDetails$ = this.busDetailsSubject.asObservable();

    setBusDetails(busDetails: any) {
      this.busDetailsSubject.next(busDetails);
    }

//ticket-passenger-details
private passengerDetailsSubject = new BehaviorSubject<any[]>([]);
public passengerDetails$ = this.passengerDetailsSubject.asObservable();

setPassengerDetails(details: any[]) {
  this.passengerDetailsSubject.next(details);
}



}
