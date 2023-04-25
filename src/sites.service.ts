import { Injectable } from '@angular/core';
import { Booking } from './model/booking';
import { Site, Timeslot } from './model/models';

@Injectable({
  providedIn: 'root',
})
export class SitesService {

  constructor() { }

  sites: Site[] = [ {id:0, status:'active', label: 'Le Lion (sacs)' }, {id: 1, status:'active', label: 'Le marché de jolis bois'} ];


  timeslots1: Timeslot[ ] = [
    {start: new Date('2024-04-24 15:00:00'), end: new Date('2024-04-24 16:00:00'), bookingList:[], status:"free"},
    {start: new Date('2024-04-24 16:00:00'), end: new Date('2024-04-24 17:00:00'), bookingList:[{by: {firstName:'Grégoire', lastName:'Dupont'}},{by: {firstName:'Gilles', lastName:'Mentor'}}], status:"complete"},
    {start: new Date('2024-04-24 17:00:00'), end: new Date('2024-04-24 18:00:00'), bookingList:[{by: {firstName:'Anthon', lastName:'Joubert'}}], status:"uncomplete"},
    {start: new Date('2024-04-25 15:00:00'), end: new Date('2024-04-25 16:00:00'), bookingList:[], status:"free"},
    {start: new Date('2024-04-26 16:00:00'), end: new Date('2024-04-26 17:00:00'), bookingList:[{by: {firstName:'Grégoire', lastName:'Dupont'}},{by: {firstName:'Gilles', lastName:'Mentor'}}], status:"complete"},
    {start: new Date('2024-04-26 17:00:00'), end: new Date('2024-04-26 18:00:00'), bookingList:[{by: {firstName:'Anthon', lastName:'Joubert'}}], status:"uncomplete"}
  ];

  timeslots: Timeslot[ ] = [
    {start: new Date('2024-04-24 15:00:00'), end: new Date('2024-04-24 16:00:00'), bookingList:[], status:"free"},
    {start: new Date('2024-04-24 16:00:00'), end: new Date('2024-04-24 17:00:00'), bookingList:[{by: {firstName:'Jean', lastName:'Paternout'}},{by: {firstName:'Gaetand', lastName:'Bienfait'}}], status:"complete"},
    {start: new Date('2024-04-24 17:00:00'), end: new Date('2024-04-24 18:00:00'), bookingList:[{by: {firstName:'Igor', lastName:'Pasheliev'}}], status:"uncomplete"},
    {start: new Date('2024-04-25 15:00:00'), end: new Date('2024-04-25 16:00:00'), bookingList:[], status:"free"},
    {start: new Date('2024-04-26 16:00:00'), end: new Date('2024-04-26 17:00:00'), bookingList:[{by: {firstName:'Grégoire', lastName:'Dupont'}},{by: {firstName:'Gilles', lastName:'Mentor'}}], status:"complete"},
    {start: new Date('2024-04-26 17:00:00'), end: new Date('2024-04-26 18:00:00'), bookingList:[{by: {firstName:'Anthon', lastName:'Joubert'}}], status:"uncomplete"}
  ];

  bookings: Booking[] = [{id:1, by:{}, start: new Date("2024-04-24 15:00:00"), end:new Date("2024-04-24 16:00:00"), site: {label:"Le Lion"}}];

  mapTimeSlots: Map<string, Timeslot[]> = new Map([["0",this.timeslots]
                                                  , ["1",this.timeslots1]]);

  getSites(){
    return this.sites;
  }

  addBooking(booking: Booking){
    this.bookings.push(booking);
  }

  getTimeslots(_date: Date, _site:string){
    return this.mapTimeSlots.get(_site).filter((value) => value.start.getDate() == _date.getDate() );
  }

  getMyBookings(){
    console.log(this.bookings);
    return this.bookings;

  }
}