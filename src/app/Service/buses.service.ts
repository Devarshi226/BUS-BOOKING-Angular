import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  // private apiUrl = 'http://localhost:3000/buses';
  private apiUrl = '  https://vigilant-carnival-jjrgg5x4vjpcp7x6-3000.app.github.dev/';



  constructor(private http: HttpClient) { }

  searchBuses(departure: string, destination: string, date: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?departure=${departure}&destination=${destination}&date=${date}`);

  }
}
