import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/Service/data-share.service';
import { SearchService } from 'src/app/Service/search.service';


@Component({
  selector: 'app-bus-search-data',
  templateUrl: './bus-search-data.component.html',
  styleUrls: ['./bus-search-data.component.scss']
})
export class BusSearchDataComponent {
  searchData: any;
  buses: any[] = [];
  constructor(private search: SearchService, private http: HttpClient,  private dataShareService: DataShareService, private router: Router) {}

  ngOnInit(): void {
    this.search.getSearchData().subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.searchData = data.slice(-1);
          this.fetchAndFilterBuses();
        }
      },
      (error) => {
        console.error('Error fetching search data', error);
      }
    );
  }

  fetchAndFilterBuses() {
    if (this.searchData) {
      const lastSearch = this.searchData[0];

      this.http.get<any[]>('http://localhost:4000/buses').subscribe(
        (busData) => {
          this.buses = busData.filter(bus =>
            bus.departure.toLowerCase() === lastSearch.departure.toLowerCase() &&
            bus.destination.toLowerCase() === lastSearch.destination.toLowerCase()
          );

        },
        (error) => {
          console.error('Error fetching bus data', error);
        }
      );
    }

  }

  // viewSeats(bus: any){
  //   this.dataShareService.setBusType(bus['coach type']);
  //   this.dataShareService.setFare(bus.fare);
  //   this.router.navigate(['/seatselaction']);
  // }

  viewSeats(bus: any) {
    this.dataShareService.setBusDetails({
      name: bus.name,
      departureTime: bus.departureTime,
      arrivalTime: bus.arrivalTime,
      coachType: bus['coach type'],
      fare: bus.fare,
      seats: bus.seats
    });
    this.dataShareService.setBusType(bus['coach type']);
      this.dataShareService.setFare(bus.fare);
    this.router.navigate(['/seatselaction']);
  }
}




