import { Component, Input, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/Service/data-share.service';


@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent  implements OnInit {

  constructor(private DataShareService:DataShareService ) { }

  ngOnInit(): void {

    this.DataShareService.setSubject$.subscribe((data) => {
      console.log(data);
      if(data){
        this.maxSeats = data;
      }else{
        this.maxSeats = 1;
      }
    }
  );

  }


  showErrorMessage = false;

  busType = 'AC Sleeper';
  fare = 500;

  selectSeat(seat: any) {
    if (this.selectedSeats.length < this.maxSeats) {
      this.selectedSeats.push(seat);
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }
  }

  isSelected(seat: any) {
    return this.selectedSeats.includes(seat);
  }


  maxSeats: number = 1; // Default to 1 seat
  selectedSeats: number[] = [];

  seats = [
    [{ value: 1, disabled: false, selected: false, cursor: false }, { value: 2, disabled: false, selected: false, cursor: false }, { value: 3, disabled: false, selected: false, cursor: false }, { value: 4, disabled: false, selected: false, cursor: false }],
    [{ value: 5, disabled: false, selected: false, cursor: false }, { value: 6, disabled: false, selected: false, cursor: false }, { value: 7, disabled: false, selected: false, cursor: false }, { value: 8, disabled: false, selected: false, cursor: false }],
    [{ value: 9, disabled: false, selected: false, cursor: false }, { value: 10, disabled: false, selected: false, cursor: false }, { value: 11, disabled: false, selected: false, cursor: false }, { value: 12, disabled: false, selected: false, cursor: false }],
    [{ value: 13, disabled: true, selected: false, cursor: false }, { value: 14, disabled: false, selected: false, cursor: false }, { value: 15, disabled: false, selected: false, cursor: false }, { value: 16, disabled: false, selected: false, cursor: false }],
    [{ value: 17, disabled: false, selected: false, cursor: false }, { value: 18, disabled: false, selected: false, cursor: false }, { value: 19, disabled: false, selected: false, cursor: false }, { value: 20, disabled: false, selected: false, cursor: false }],
    [{ value: 21, disabled: false, selected: false, cursor: false }, { value: 22, disabled: false, selected: false, cursor: false }, { value: 23, disabled: false, selected: false, cursor: false }, { value: 24, disabled: false, selected: false, cursor: false }],
    [{ value: 25, disabled: false, selected: false, cursor: false }, { value: 26, disabled: false, selected: false, cursor: false }, { value: 27, disabled: false, selected: false, cursor: false }, { value: 28, disabled: true, selected: false, cursor: false }],
    // [{ value: 27, disabled: false, selected: false, cursor: false }, { value: 28, disabled: true, selected: false, cursor: false }]
  ];





  onMaxSeatsChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.maxSeats = parseInt(selectElement.value, 10);

    if (this.selectedSeats.length > this.maxSeats) {
      this.selectedSeats = this.selectedSeats.slice(0, this.maxSeats);
      this.seats.forEach(row => {
        row.forEach(seat => {
          if (this.selectedSeats.includes(seat.value)) {
            seat.selected = true;
          } else {
            seat.selected = false;
          }
        });
      });
    }



  }

  onSeatChange(seat: any) {
    if (seat.selected) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat.value);
      seat.selected = false;
    } else {
      if (this.selectedSeats.length < this.maxSeats) {
        this.selectedSeats.push(seat.value);
        seat.selected = true;
      }
    }

    this.seats.forEach(row => {
      row.forEach((seat: any) => {
        if(!seat.selected && (this.selectedSeats.length == this.maxSeats) && !seat.disabled){
          console.log(seat.value)
          seat.cursor = true;
        } else {
          seat.cursor = false
        }
      });
    });

    console.log('Selected Seats:', this.selectedSeats);
  }

  protected readonly toString = toString;
}
