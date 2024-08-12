import { Component } from '@angular/core';
import { DataShareService } from 'src/app/Service/data-share.service';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  busName: string = '';
  departureTime: string = '';
  arrivalTime: string = '';
  busType: string = '';
  selectedSeats: number[] = [];
  passengerDetails: any[] = [];
  totalFare: number = 0;

  constructor(private dataShareService: DataShareService) {}

  ngOnInit(): void {
    this.dataShareService.busDetails$.subscribe(busDetails => {
      if (busDetails) {
        this.busName = busDetails.name;
        this.departureTime = busDetails.departureTime;
        this.arrivalTime = busDetails.arrivalTime;
        this.busType = busDetails.coachType;
      }
    });

    this.dataShareService.selectedSeats$.subscribe(seats => {
      this.selectedSeats = seats || [];
    });

    this.dataShareService.totalFare$.subscribe(fare => {
      this.totalFare = fare || 0;
    });

    // Assuming you store passenger details in DataShareService
    this.dataShareService.passengerDetails$.subscribe(details => {
      this.passengerDetails = details || [];
    });
  }


}
