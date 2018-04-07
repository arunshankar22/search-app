import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule, FormsModule, DataTablesModule, RouterModule.forRoot([]),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, SearchComponent, HeaderComponent, SidebarComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
