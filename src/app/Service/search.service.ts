import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:3000/BusSearchData'; // Adjust this URL to match your backend API

  constructor(private http: HttpClient) {}

  saveSearchData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getSearchData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
