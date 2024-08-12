import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataShareService } from 'src/app/Service/data-share.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {


  bookingForm: FormGroup;
  selectedSeats: number[] = [];
  busName: string = '';
  departureTime: string = '';
  arrivalTime: string = '';
  busType: string = '';
  totalFare: number = 0;

  constructor(private fb: FormBuilder, private dataShareService: DataShareService) {
    this.bookingForm = this.fb.group({
      passengers: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.dataShareService.selectedSeats$.subscribe((seats:any) => {
      this.selectedSeats = seats || [];
      this.initializePassengerForms();
    });

    this.dataShareService.busDetails$.subscribe(busDetails => {
      if (busDetails) {
        this.busName = busDetails.name;
        this.departureTime = busDetails.departureTime;
        this.arrivalTime = busDetails.arrivalTime;
        this.busType = busDetails.coachType;
        this.totalFare = busDetails.fare * this.selectedSeats.length;
      }
    });
  }

  get passengers(): FormArray {
    return this.bookingForm.get('passengers') as FormArray;
  }

  initializePassengerForms(): void {
    this.selectedSeats.forEach(() => {
      this.passengers.push(this.fb.group({
        name: ['', Validators.required],
        age: ['', [Validators.required, Validators.min(1)]],
        contact: ['', [Validators.required, Validators.pattern('^\\d{10}$')]]
      }));
    });
  }

  confirmBooking(): void {
    if (this.bookingForm.valid) {
      const bookingData = {
        busName: this.busName,
        departureTime: this.departureTime,
        arrivalTime: this.arrivalTime,
        busType: this.busType,
        selectedSeats: this.selectedSeats,
        passengerDetails: this.bookingForm.value.passengers,
        totalFare: this.totalFare
      };

      console.log('Booking Confirmed:', bookingData);
      // You can handle further logic here, like sending booking data to the server.
    }
  }
}
