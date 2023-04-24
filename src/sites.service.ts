import { Injectable } from '@angular/core';
import { Site, Timeslot } from './model/models';

@Injectable({
  providedIn: 'root',
})
export class SitesService {

  constructor() { }

  sites: Site[] = [ {id:1, status:'active', label: 'lion' }, {id: 2, status:'active', label: 'marché jolis bois'} ];

  timeslots: Timeslot[] = [
    {start: new Date('2024-04-24 17:00:00'), end: new Date('2024-04-24 17:30:00'), bookingList:[], status:"free"}
  ];

  getSites(){
    return this.sites;
  }
}