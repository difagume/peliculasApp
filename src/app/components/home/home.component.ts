import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculasCartelera: any[] = [];
  peliculasPopulares: any[] = [];
  peliculasPopularesInfantiles: any[] = [];

  constructor(public _ps: PeliculasService) {
    this.obtenerEnCartelera();
    this.obtenerPopulares();
    this.obtenerPopularesInfantiles();
  }

  ngOnInit() {
  }

  obtenerEnCartelera() {
    this._ps.peliculasCartelera()
      .subscribe(data => {
        this.peliculasCartelera = data.results;
        console.log('Películas cartelera: ', this.peliculasCartelera);
      });
  }

  obtenerPopulares() {
    this._ps.getPopulares()
      .subscribe(data => {
        this.peliculasPopulares = data.results;
        // console.log('Películas populares: ', this.peliculasPopulares);
      });
  }

  obtenerPopularesInfantiles() {
    this._ps.getPopularesInfantiles()
      .subscribe(data => {
        this.peliculasPopularesInfantiles = data.results;
        // console.log('Populares infantiles: ', this.peliculasPopularesInfantiles);
      });
  }
}
