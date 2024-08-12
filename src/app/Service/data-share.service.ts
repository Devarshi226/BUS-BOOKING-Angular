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


  // Total Fare
  private setTotalFareSubject = new BehaviorSubject<any>(null);

  public setTotalFareSubject$ = this.setTotalFareSubject.asObservable();

  setTotalFare(totalFare: number){
    this.setTotalFareSubject.next(totalFare);
  }


  // Selected Seats
  private setSelectedSeatsSubject = new BehaviorSubject<any>(null);

  public setSelectedSeatsSubject$ = this.setSelectedSeatsSubject.asObservable();

  setSelectedSeats(selectedSeats: any){
    this.setSelectedSeatsSubject.next(selectedSeats);
  }



    // Bus Details
    private busDetailsSubject = new BehaviorSubject<any>(null);
    public busDetails$ = this.busDetailsSubject.asObservable();

    setBusDetails(busDetails: any) {
      this.busDetailsSubject.next(busDetails);
    }


// Selected Seats
private selectedSeatSubject = new BehaviorSubject<number[]>([]);
public selectedSeats$ = this.selectedSeatSubject.asObservable();

setSelectedSeat(selectedSeat: number[]) {
  this.selectedSeatSubject.next(selectedSeat);
}


}
