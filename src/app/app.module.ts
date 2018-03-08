import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeliculasService } from "./services/peliculas.service";

import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
