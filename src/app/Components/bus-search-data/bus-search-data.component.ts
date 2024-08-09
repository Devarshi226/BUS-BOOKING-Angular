import { Component } from '@angular/core';
import { SearchService } from 'src/app/Service/search.service';

@Component({
  selector: 'app-bus-search-data',
  templateUrl: './bus-search-data.component.html',
  styleUrls: ['./bus-search-data.component.scss']
})
export class BusSearchDataComponent {
  searchData: any[] = []; // Array to hold the data fetched from the API

  constructor(private search: SearchService) {}

  ngOnInit(): void {
    this.search.getSearchData().subscribe(
      (data) => {
        if (data && data.length > 0) {
          // Get the last entry in the array
          this.searchData = [data[data.length - 1]]; // Assign only the last entry
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }


}
