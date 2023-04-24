import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import { Site, Timeslot } from '../model/models';

import { SitesService} from '../sites.service';

@Component({
  selector: 'app-planning-selector',
  templateUrl: './planning-selector.component.html',
  styleUrls: ['./planning-selector.component.css']
})
export class PlanningSelectorComponent implements OnInit {

  calendarOptions: CalendarOptions;
  sites: Site[] = this.sitesService.getSites();
  timeslots: Timeslot[] = this.sitesService.timeslots;

  sitesCtrl: FormControl = new FormControl();
  siteId: number;
  
  constructor( private sitesService: SitesService,
    ) { }

  ngOnInit() {
    this.calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev, next today',
        center: 'title',
        right: ''
      },

      events: []
    };
  }

}