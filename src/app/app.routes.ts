import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pelicula/:id', component: PeliculaComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
