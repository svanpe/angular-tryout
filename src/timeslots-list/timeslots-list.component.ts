import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { Timeslot, Booking } from '../model/models';
import { SitesService} from '../sites.service';

@Component({
  selector: 'app-timeslots-list',
  templateUrl: './timeslots-list.component.html',
  styleUrls: ['./timeslots-list.component.css']
})
export class TimeslotsListComponent implements OnChanges , OnInit  {

  @Input() selectedDate = new Date();
  @Input() selectedSite = 0;
  timeslots: Timeslot[] = this.sitesService.getTimeslots(this.selectedDate, this.selectedSite.toString());

  constructor( private sitesService: SitesService) 
  {  }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) { 
    console.log(this.selectedSite);
    this.timeslots = this.sitesService.getTimeslots(this.selectedDate, this.selectedSite.toString());
  }

  subscribe(timeslot : Timeslot){
    const booking: Booking = {start:timeslot.start, end: timeslot.end, site: {id:this.selectedSite}};
    console.log("coucou");
    this.sitesService.addBooking(booking);
  }
}
