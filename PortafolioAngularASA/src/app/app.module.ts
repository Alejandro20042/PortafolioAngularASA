import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; //modulo para poder ser cliente en de parte de Angular

import { AppComponent } from './app.component';
import PortafolioComponent from './portafolio/portafolio.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientModule //importamos el modulo para utilizarlo de forma global en la app
      
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }