import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquateComponent } from './equate/equate.component';
import { ResultHereComponent } from './equate/result-here/result-here.component';

@NgModule({
  declarations: [
    AppComponent,
    EquateComponent,
    ResultHereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
