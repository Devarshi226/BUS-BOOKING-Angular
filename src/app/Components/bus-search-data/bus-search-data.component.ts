import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from 'src/app/Service/search.service';

@Component({
  selector: 'app-bus-search-data',
  templateUrl: './bus-search-data.component.html',
  styleUrls: ['./bus-search-data.component.scss']
})
export class BusSearchDataComponent {
  // searchData: any[] = [];
  // buses: any[] = [];
  // constructor(private search: SearchService, private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.search.getSearchData().subscribe(
  //     (data) => {
  //       if (data && data.length > 0) {
  //         this.searchData = data.slice(-1);
  //         this.fetchAndFilterBuses();
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching search data', error);
  //     }
  //   );
  // }

  // fetchAndFilterBuses() {
  //   if (this.searchData) {
  //     const lastSearch = this.searchData[0];

  //     this.http.get<any[]>('http://localhost:4000/buses').subscribe(
  //       (busData) => {
  //         this.buses = busData.filter(bus =>
  //           bus.departure.toLowerCase() === lastSearch.departure.toLowerCase() &&
  //           bus.destination.toLowerCase() === lastSearch.destination.toLowerCase()
  //         );

  //       },
  //       (error) => {
  //         console.error('Error fetching bus data', error);
  //       }
  //     );
  //   }
  // }


  searchData: any[] = [];
  buses: any[] = [];
  filteredBuses: any[] = [];
  filterForm: FormGroup;
  selectedBusId: number | null = null;

  constructor(private search: SearchService, private http: HttpClient, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      departureTime: ['']
    });
  }

  ngOnInit(): void {
    this.search.getSearchData().subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.searchData = data.slice(-1);
          console.log('Search data:', this.searchData); // Log search data
          this.fetchAndFilterBuses();
        }
      },
      (error) => {
        console.error('Error fetching search data', error);
      }
    );

    this.filterForm.valueChanges.subscribe(() => this.applyFilters());
  }

  fetchAndFilterBuses() {
    if (this.searchData.length > 0) {
      const lastSearch = this.searchData[0];

      this.http.get<any[]>('http://localhost:4000/buses').subscribe(
        (busData) => {
          console.log('Fetched bus data:', busData); // Log fetched bus data

          this.buses = busData.filter(bus =>
            bus.departure.toLowerCase() === lastSearch.departure.toLowerCase() &&
            bus.destination.toLowerCase() === lastSearch.destination.toLowerCase()
          );

          console.log('Filtered buses:', this.buses); // Log buses after initial filtering

          this.applyFilters(); // Apply filters to the fetched buses
        },
        (error) => {
          console.error('Error fetching bus data', error);
        }
      );
    }
  }


  applyFilters() {
    const departureTime = this.filterForm.get('departureTime')?.value;

    console.log('Filtering with departureTime:', departureTime); // Log filter value

    this.filteredBuses = this.buses.filter(bus => {
      console.log('Checking bus departureTime:', bus.departureTime); // Log each bus's departure time
      return departureTime ? bus.departureTime === departureTime : true;
    });

    console.log('Filtered buses:', this.filteredBuses); // Log the result
  }

  // viewSeats(busId: number) {
  //   this.selectedBusId = busId;
  // }
  // confirmSeats() {
  //   console.log('Seats confirmed for bus ID:', this.selectedBusId);
  //   // Additional logic to handle seat confirmation can go here
  // }

}




