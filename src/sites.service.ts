import { Injectable } from '@angular/core';
import { Booking } from './model/booking';
import { Site, Timeslot } from './model/models';

@Injectable({
  providedIn: 'root',
})
export class SitesService {

  constructor() { }

  sites: Site[] = [ {id:1, status:'active', label: 'Le Lion (sacs)' }, {id: 2, status:'active', label: 'Le marché de jolis bois'} ];

  timeslots: Timeslot[] = [
    {start: new Date('2024-04-24 15:00:00'), end: new Date('2024-04-24 16:00:00'), bookingList:[], status:"free"},
    {start: new Date('2024-04-24 16:00:00'), end: new Date('2024-04-24 17:00:00'), bookingList:[{by: {firstName:'Grégoire', lastName:'Dupont'}},{by: {firstName:'Gilles', lastName:'Mentor'}}], status:"complete"},
    {start: new Date('2024-04-24 17:00:00'), end: new Date('2024-04-24 18:00:00'), bookingList:[{by: {firstName:'Anthon', lastName:'Joubert'}}], status:"uncomplete"},
    {start: new Date('2024-04-25 15:00:00'), end: new Date('2024-04-25 16:00:00'), bookingList:[], status:"free"},
    {start: new Date('2024-04-26 16:00:00'), end: new Date('2024-04-26 17:00:00'), bookingList:[{by: {firstName:'Grégoire', lastName:'Dupont'}},{by: {firstName:'Gilles', lastName:'Mentor'}}], status:"complete"},
    {start: new Date('2024-04-26 17:00:00'), end: new Date('2024-04-26 18:00:00'), bookingList:[{by: {firstName:'Anthon', lastName:'Joubert'}}], status:"uncomplete"}
  ];

  bookings: Booking[] = [{id:1, by:{}, start: new Date("2024-04-24 15:00:00"), end:new Date("2024-04-24 16:00:00"), site: {label:"Le Lion"}}];

  getSites(){
    return this.sites;
  }

  addBooking(booking: Booking){
    this.bookings.push(booking);
  }


  getTimeslots(_date?: Date){

    const filtered = this.timeslots.filter((value) => value.start.getDate() == _date.getDate() );

    return filtered;
  }

  getMyBookings(){
    return this.bookings;
  }
}