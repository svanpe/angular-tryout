import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Site } from '../model/models';


import { SitesService} from '../sites.service';

@Component({
  selector: 'app-planning-selector',
  templateUrl: './planning-selector.component.html',
  styleUrls: ['./planning-selector.component.css']
})
export class PlanningSelectorComponent implements OnInit {

  calendarOptions: CalendarOptions;
  sites: Site[] = this.sitesService.getSites();

  sitesCtrl: FormControl = new FormControl();
  siteId: number;
  
  selectedDate: Date = new Date();
  selectedSite: number = 0;

  constructor( private sitesService: SitesService,
    ) { }

  ngOnInit() {

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev, next today',
        center: 'title',
        right: ''
      },
      dateClick: this.onDateClick.bind(this),
      events: [],
     

    };

    this.selectedSite=0;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onChange(siteValue) {
    console.log(siteValue);
    this.selectedSite = siteValue;
  }

  onDateClick(date: { dateStr: string; }) {
    this.selectedDate = new Date(date.dateStr);
  }
}