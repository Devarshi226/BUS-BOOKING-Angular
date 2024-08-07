import { Component, OnInit } from '@angular/core';
import { BUS_SCHEDULES } from 'src/app/moke-data';

@Component({
  selector: 'app-bus-schedule',
  templateUrl: './bus-schedule.component.html',
  styleUrls: ['./bus-schedule.component.scss']
})
export class BusScheduleComponent implements OnInit {
  schedules = BUS_SCHEDULES;
  filteredSchedules = BUS_SCHEDULES;
  searchQuery: string = '';
  filterDate: string = '';
  filterTime: string = '';
  filterDestination: string = '';

  constructor() {}

  ngOnInit(): void {}

  filterSchedules(): void {
    this.filteredSchedules = this.schedules.filter(schedule => {
      const matchesSearchQuery =
        schedule.route.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        schedule.busNumber.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (schedule.stops && schedule.stops.some(stop => stop.toLowerCase().includes(this.searchQuery.toLowerCase())));

      const matchesDate = this.filterDate ? new Date(schedule.departure).toISOString().split('T')[0] === this.filterDate : true;

      const matchesTime = this.filterTime ? new Date(schedule.departure).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) === this.filterTime : true;

      const matchesDestination = this.filterDestination ? schedule.route.toLowerCase().includes(this.filterDestination.toLowerCase()) : true;

      return matchesSearchQuery && matchesDate && matchesTime && matchesDestination;
    });
  }
}
