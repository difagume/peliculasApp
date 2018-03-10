import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public _ps: PeliculasService, private _router: Router) { }

  ngOnInit() { }

  buscarPeliculas(titulo: string) {
    if (titulo === '') { return; }
    this._router.navigate(['/buscar']);
    this._ps.buscarPeliculas(titulo);
  }

}
