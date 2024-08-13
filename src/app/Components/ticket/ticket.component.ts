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
  selectedSeats: number= 0
  passengerDetails: any[] = [];
  totalFare: number = 0;
  busdate: string = '';
  Source: string = '';
  Destination: string = '';


  constructor(private dataShareService: DataShareService) {}
  passengers = [
    { name: 'John Doe', seatNo: '12' },
    { name: 'Jane Smith', seatNo: '13' },
    { name: 'Mike Johnson', seatNo: '15' }
  ];

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

    // this.dataShareService.setSource("Ahmedabad")
    this.dataShareService.setSourceSubject$.subscribe(setSourceSubject => {
      this.Source = setSourceSubject ;
    });

    // this.dataShareService.setDestination("Rajkot")
    this.dataShareService.setDestinationSubject$.subscribe(setDestinationSubject => {
      this.Destination = setDestinationSubject;
    });

    // this.dataShareService.setBusType("AC Volvo")
    this.dataShareService.setBusTypeSubject$.subscribe(setBusTypeSubject => {
      this.busType = setBusTypeSubject;
    });

    this.dataShareService.setBusDate("2021-09-01")
    this.dataShareService.setBusDateSubject$.subscribe(setBusDateSubject => {
      this.busdate = setBusDateSubject;
    });





this.dataShareService.setSeat(4)
    this.dataShareService.setSubject$.subscribe(seats => {
      this.selectedSeats = seats;
    });


    this.dataShareService.setTotalFare(100);
    this.dataShareService.totalFare$.subscribe(fare => {
      this.totalFare = fare || 0;
    });

    this.dataShareService.passengerDetails$.subscribe(details => {
      this.passengerDetails = details || [];
    });
  }

  printTicket() {
    window.print();
  }


}
