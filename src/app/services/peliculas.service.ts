import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Location } from '@angular/common';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx'; // Maps

@Injectable()
export class PeliculasService {

  private apikey = '2ef9a0c8fb9bd84ea63776832fe19420';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  public urlImages = 'https://image.tmdb.org/t/p/w300'; // https://developers.themoviedb.org/3/configuration/get-api-configuration
  public titulo = '';
  public peliculas: any[] = [];

  constructor(private jsonp: Jsonp, private _location: Location) {
    console.log('Servicio Peliculas iniciado!');
  }


  // https://developers.themoviedb.org/3/configuration/get-api-configuration

  regresar() {
    this._location.back();
  }

  getPopulares() {
    const url = `${this.urlMoviedb}/movie/popular?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

  getPopularesInfantiles() {
    const url = `${this.urlMoviedb}/discover/movie?certification.lte=G&certification_country=US
    &sort_by=popularity.desc&language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

  buscarPeliculas(titulo: string) {
    if (titulo === '') { return; }
    const url = `${this.urlMoviedb}/search/movie?query=${titulo}&language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    let peliculasEncontradas: any[] = [];

    this.peliculas = [];

    return this.jsonp.get(url)
      .map(respuesta => respuesta.json())
      .subscribe(data => {
        peliculasEncontradas = data.results;

        // Limpio películas sin imagen
        for (const p of peliculasEncontradas) {
          if (p.poster_path != null) {
            this.peliculas.push(p);
          }
        }

        console.log('Películas encontradas: ', this.peliculas);
      });
  }

  peliculasCartelera() {
    const url = `${this.urlMoviedb}/movie/now_playing?&language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

  obtenerPelicula(id: string) {
    const url = `${this.urlMoviedb}/movie/${id}?language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

}
