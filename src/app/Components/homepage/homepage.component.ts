import { DataShareService } from './../../Service/data-share.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { BusesService } from 'src/app/Service/buses.service';
import { SearchService } from 'src/app/Service/search.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  implements OnInit {
  searchForm: FormGroup;
  buses: any[] = [];
  minDate!: string;

  places = [
    { key: 'ahmedabad', value: 'Ahmedabad' },
    { key: 'surat', value: 'Surat' },
    { key: 'bhavnagar', value: 'Bhavnagar' },
    { key: 'rajkot', value: 'Rajkot' },
    { key: 'amreli', value: 'Amreli' },
    { key: 'vadodara', value: 'Vadodara' },
    { key: 'mumbai', value: 'Mumbai' },
  ];
  filteredPlaces: { key: string, value: string }[] = [...this.places];

  constructor(private fb: FormBuilder, private search:SearchService, private route:Router, private DataShareService:DataShareService) {
    this.searchForm = this.fb.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
      passengers: [1, Validators.required]
    });
  }

  ngOnInit() {
    this.searchForm.get('departure')?.valueChanges.subscribe(value => {
      this.filterGoingToOptions(value);
    });



    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
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
      this.search.saveSearchData(this.searchForm.value).subscribe(
        (response) => {
          console.log('Form data saved:', response);
          this.route.navigate(['/search']);
        },
        (error) => {
          console.error('Error saving form data:', error);
        }
      );

      this.DataShareService.setSeat(this.searchForm.get('passengers')?.value);
      this.DataShareService.setSource(this.searchForm.get('departure')?.value);
      this.DataShareService.setDestination(this.searchForm.get('destination')?.value);
      this.DataShareService.setBusDate(this.searchForm.get('date')?.value);

    }
      console.log(this.searchForm.value);
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
