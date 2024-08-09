import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchService } from 'src/app/Service/search.service';

@Component({
  selector: 'app-bus-search-data',
  templateUrl: './bus-search-data.component.html',
  styleUrls: ['./bus-search-data.component.scss']
})
export class BusSearchDataComponent {
  searchData: any[] = [];
  buses: any[] = [];
  constructor(private search: SearchService, private http: HttpClient) {}

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
  }



