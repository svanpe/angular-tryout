import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/models';

import { SitesService} from '../sites.service';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  myBookings: Booking[] = this.sitesService.getMyBookings();

  constructor( private sitesService: SitesService,
    ) { }

  ngOnInit() {
  }

}