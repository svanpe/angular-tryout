import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlanningSelectorComponent } from '../planning-selector/planning-selector.component';


@NgModule({
  declarations: [
  
    AppComponent,
    PlanningSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'planning-selector', component: PlanningSelectorComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
