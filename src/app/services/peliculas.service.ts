import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";

import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apikey: string = '2ef9a0c8fb9bd84ea63776832fe19420';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) {
    console.log('Servicio Peliculas iniciado!');
  }

  getPopulares() {

    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=es-EC&sort_by=popularity.desc&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
      .map(respuesta => respuesta.json());
  }

}
