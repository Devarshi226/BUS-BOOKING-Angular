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
busdate: string = '';
Source: string = '';
Destination: string = '';

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

  this.dataShareService.setBusDateSubject$.subscribe(setBusDateSubject => {
    this.busdate = setBusDateSubject;
  });

  this.dataShareService.setSourceSubject$.subscribe(setSourceSubject => {
    this.Source = setSourceSubject ;
  });

  this.dataShareService.setDestinationSubject$.subscribe(setDestinationSubject => {
    this.Destination = setDestinationSubject;
  });

  this.dataShareService.selectedSeats$.subscribe(seats => {
    this.selectedSeats = seats || [];
  });

  this.dataShareService.totalFare$.subscribe(fare => {
    this.totalFare = fare || 0;
  });

  this.dataShareService.passengerDetails$.subscribe(details => {
    this.passengerDetails = details.map((detail, index) => {
      return {
        ...detail,
        seatNo: this.selectedSeats[index]
      };
    }) || [];
  });
}

printTicket() {
  window.print();
}
}


