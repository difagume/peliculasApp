import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas: any[] = [];

  constructor(public _ps: PeliculasService) { this.obtenerPopulares(); }

  ngOnInit() {
  }

  obtenerPopulares() {
    this._ps.getPopulares()
      .subscribe(data => {
        // console.log('Populares: ', data.results);
        this.peliculas = data.results;
        console.log('Películas: ', this.peliculas);
      });
  }
}
