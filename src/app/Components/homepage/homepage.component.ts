import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectBusService } from 'src/app/Service/select-bus.service';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { BusesService } from 'src/app/Service/buses.service';

// interface Bus {
//   name: string;
//   departureTime: string;
//   arrivalTime: string;
//   fare: number;
// }

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  implements OnInit {
  searchForm: FormGroup;
  buses: any[] = [];

  places = [
    { key: 'ahmedabad', value: 'Ahmedabad' },
    { key: 'surat', value: 'Surat' },
    { key: 'bhavnagar', value: 'Bhavnagar' },
    { key: 'rajkot', value: 'Rajkot' },
    { key: 'amreli', value: 'Amreli' },
    { key: 'vadodra', value: 'Vadodra' },
    { key: 'mumbai', value: 'Mumbai' },
  ];
  filteredPlaces: { key: string, value: string }[] = [...this.places];

  constructor(private fb: FormBuilder, private busService: BusesService) {
    this.searchForm = this.fb.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.searchForm.get('departure')?.valueChanges.subscribe(value => {
      this.filterGoingToOptions(value);
    });
  }

  filterGoingToOptions(leavingFrom: string) {
    this.filteredPlaces = this.places.filter(place => place.key !== leavingFrom);
    const goingToControl = this.searchForm.get('destination');
    if (goingToControl && this.filteredPlaces.every(place => place.key !== goingToControl.value)) {
      goingToControl.setValue('');
    }
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const { departure, destination, date } = this.searchForm.value;
      this.busService.searchBuses(departure, destination, date).subscribe(
        (data) => {
          this.buses = data;
          console.log('Buses fetched successfully', this.buses);

        },
        (error) => {
          console.error('Error fetching buses', error);
        }
      );
    }
      console.log(this.searchForm.value);
      // Handle form submission
    }


  swapCities(): void {
    const leavingFromValue = this.searchForm.get('departure')?.value;
    const goingToValue = this.searchForm.get('destination')?.value;

    this.searchForm.patchValue({
      departure: goingToValue,
      destination: leavingFromValue
    });
  }



}
