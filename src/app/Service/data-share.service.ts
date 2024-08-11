import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public seat : number = 1;

  constructor() { }

  private setSubject = new BehaviorSubject<any>(null);

  public setSubject$ = this.setSubject.asObservable();

  setSeat(seat: number){
    this.setSubject.next(seat);
  }

}
