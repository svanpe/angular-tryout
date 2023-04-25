import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { Timeslot } from '../model/models';
import { SitesService} from '../sites.service';

@Component({
  selector: 'app-timeslots-list',
  templateUrl: './timeslots-list.component.html',
  styleUrls: ['./timeslots-list.component.css']
})
export class TimeslotsListComponent implements OnChanges , OnInit  {

  @Input() selectedDate = new Date();
  @Input() selectedSite = 0;
  timeslots: Timeslot[] = this.sitesService.getTimeslots(this.selectedDate);

  constructor( private sitesService: SitesService) 
  {  }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) { 
    
    this.timeslots = this.sitesService.getTimeslots(this.selectedDate);
  }
}