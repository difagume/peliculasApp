import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx'; // Maps

@Injectable()
export class PeliculasService {

  private apikey = '2ef9a0c8fb9bd84ea63776832fe19420';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  public urlImages = 'https://image.tmdb.org/t/p/w300'; // https://developers.themoviedb.org/3/configuration/get-api-configuration

  constructor(private jsonp: Jsonp) {
    console.log('Servicio Peliculas iniciado!');
  }


  // https://developers.themoviedb.org/3/configuration/get-api-configuration

  getPopulares() {
    let url = `${this.urlMoviedb}/movie/popular?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

  getPopularesInfantiles() {
    let url = `${this.urlMoviedb}/discover/movie?certification.lte=G&certification_country=US&sort_by=popularity.desc&language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

  buscarPelicula(pelicula: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${pelicula}&language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

  peliculasCartelera() {
    let url = `${this.urlMoviedb}/movie/now_playing?&language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

  obtenerPelicula(id: string) {
    let url = `${this.urlMoviedb}/movie/${id}?language=es&api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

}
