import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent  {
  seats = [
    [
      { number: 'A1', occupied: false },
      { number: 'A2', occupied: true },
      { number: 'A3', occupied: false },
      { number: 'A4', occupied: false }
    ],
    [
      { number: 'B1', occupied: false },
      { number: 'B2', occupied: true },
      { number: 'B3', occupied: false },
      { number: 'B4', occupied: false }
    ],
    [
      { number: 'C1', occupied: false },
      { number: 'C2', occupied: false },
      { number: 'C3', occupied: false },
      { number: 'C4', occupied: true }
    ],
    [
      { number: 'D1', occupied: false },
      { number: 'D2', occupied: false },
      { number: 'D3', occupied: false },
      { number: 'D4', occupied: true }
    ],
    [
      { number: 'E1', occupied: false, isDriverSeat: true },
      { number: 'E2', occupied: false },
      { number: 'E3', occupied: false },
      { number: 'E4', occupied: false }
    ]
  ];

  selectedSeats: any[] = [];
  maxSeats = 4;
  showErrorMessage = false;

  busType = 'AC Sleeper';
  fare = 500;

  selectSeat(rowIndex: number, seatIndex: number) {
    const seat = this.seats[rowIndex][seatIndex];
    const selectedIndex = this.selectedSeats.indexOf(seat);

    if (selectedIndex !== -1) {
      this.selectedSeats.splice(selectedIndex, 1); // Deselect seat
      this.showErrorMessage = false;
    } else if (!seat.occupied && !seat.isDriverSeat) {
      if (this.selectedSeats.length < this.maxSeats) {
        this.selectedSeats.push(seat); // Select seat
        this.showErrorMessage = false;
      } else {
        this.showErrorMessage = true; // Show error message
      }
    }
  }

  isSelected(seat: any) {
    return this.selectedSeats.includes(seat);
  }
}
