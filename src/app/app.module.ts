import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { APPROUTING } from './app.routes';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    APPROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
