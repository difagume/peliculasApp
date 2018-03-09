import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { APPROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    APPROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
