import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';

import { HeaderModule }  from './header/header.module';
import { MainContentModule }  from './mainContent/mainContent.module';
import { AppRoutingModule, routableComponent}  from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, /*AppRoutingModule,*/ HeaderModule, MainContentModule ],
  declarations: [ AppComponent/*,  routableComponent*/],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
