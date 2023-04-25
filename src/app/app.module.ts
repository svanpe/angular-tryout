import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { PlanningSelectorComponent } from '../planning-selector/planning-selector.component';
import { MyBookingsComponent} from '../my-bookings/my-bookings.component';
import { TimeslotsListComponent } from '../timeslots-list/timeslots-list.component'

@NgModule({
  declarations: [
  
    AppComponent,
    TimeslotsListComponent,
    PlanningSelectorComponent,
    MyBookingsComponent
   
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    
    RouterModule.forRoot([
      {path: 'planning-selector', component: PlanningSelectorComponent},
      {path: 'my-bookings', component: MyBookingsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
