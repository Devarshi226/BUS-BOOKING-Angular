import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public seat : number = 1;

  constructor() { }

  setSeat(seat: number){
    this.seat = seat;
  }

}
