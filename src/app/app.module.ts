import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//bootstrap alert import part 1
import { TabsModule } from 'ng2-bootstrap';



import { AppComponent }  from './app.component';

import { RentModule } from './rent/rent.module'

import { HeaderModule }  from './header/header.module';
import { MainContentModule }  from './mainContent/mainContent.module';
import { AppRoutingModule, routableComponents}  from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RentModule, AppRoutingModule/*,HeaderModule, MainContentModule */,  TabsModule.forRoot() ],
  declarations: [ AppComponent,  routableComponents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
