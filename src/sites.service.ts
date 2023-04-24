import { Injectable } from '@angular/core';
import { Booking } from './model/booking';
import { Site, Timeslot } from './model/models';

@Injectable({
  providedIn: 'root',
})
export class SitesService {

  constructor() { }

  sites: Site[] = [ {id:1, status:'active', label: 'lion' }, {id: 2, status:'active', label: 'marché jolis bois'} ];

  timeslots: Timeslot[] = [
    {start: new Date('2024-04-24 15:00:00'), end: new Date('2024-04-24 16:00:00'), bookingList:[], status:"free"},
    {start: new Date('2024-04-24 16:00:00'), end: new Date('2024-04-24 17:00:00'), bookingList:[{by: {firstName:'Grégoire', lastName:'Dupont'}},{by: {firstName:'Gilles', lastName:'Mentor'}}], status:"complete"},
    {start: new Date('2024-04-24 17:00:00'), end: new Date('2024-04-24 18:00:00'), bookingList:[{by: {firstName:'Anthon', lastName:'Joubert'}}], status:"uncomplete"}
  ];

  bookings: Booking[] = [{id:1, by:{}, start: new Date("2024-04-24 15:00:00"), end:new Date("2024-04-24 16:00:00"), site: {label:"lion"}}];

  getSites(){
    return this.sites;
  }

  getMyBookings(){
    return this.bookings;
  }
}