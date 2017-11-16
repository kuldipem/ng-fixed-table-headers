import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {PaginationModule} from 'ng2-bootstrap';
import {Ng2PaginationModule} from 'ng2-pagination';


// components 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadComponent } from './logs/load/load.component';

//services 
import {LoadService} from './services/load.service';
import {CallService} from './services/call.service';
import {ProgramService} from './services/program.service';
import {PagerService} from './services/pagination.service';

//pipes  
import {CountsPipe} from './pipes/counts.pipe';
import {NullPipe} from './pipes/null.pipe';
import {AutoCompletePipe} from './pipes/autocomplete.pipe';

//routing module
import {routing} from './app.routemodule';
import { CallComponent } from './logs/call/call.component';
import { ProgramComponent } from './logs/program/program.component';
import { LogdashboardComponent } from './logs/logdashboard/logdashboard.component';
import { HomeComponent } from './home/home.component';

import './windowFixed.js'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoadComponent,
    AutoCompletePipe,
    CountsPipe,
    CallComponent,
    ProgramComponent,
    LogdashboardComponent,
    HomeComponent,
    NullPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PaginationModule,
    PaginationModule,
    
  ],
  providers: [LoadService,CallService,ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
