import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectBusService } from 'src/app/Service/select-bus.service';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { BusesService } from 'src/app/Service/buses.service';

interface BusStops {
  [key: string]: string[];
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  implements OnInit {
  searchForm: FormGroup;
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

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      leaving_from: ['', Validators.required],
      going_to: ['', Validators.required],
      depart_date: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.searchForm.get('leaving_from')?.valueChanges.subscribe(value => {
      this.filterGoingToOptions(value);
    });
  }

  filterGoingToOptions(leavingFrom: string) {
    this.filteredPlaces = this.places.filter(place => place.key !== leavingFrom);
    const goingToControl = this.searchForm.get('going_to');
    if (goingToControl && this.filteredPlaces.every(place => place.key !== goingToControl.value)) {
      goingToControl.setValue('');
    }
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      // Handle form submission
    }
  }

  swapCities(): void {
    const temp = this.searchForm.get('leaving_from')?.value;
    this.searchForm.patchValue({
      leaving_from: this.searchForm.get(' going_to')?.value,
      going_to: temp
    });
  }


}
