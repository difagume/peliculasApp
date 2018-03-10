import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any = {};
  loading = true;

  constructor(private activatedRoute: ActivatedRoute, public _ps: PeliculasService) {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {

        console.log('idPelicula: ', id);

        this._ps.obtenerPelicula(id)
          .subscribe(data => {
            // console.log(data);
            this.pelicula = data;
            this.loading = false;
          });
      });
  }

  ngOnInit() { }

}
