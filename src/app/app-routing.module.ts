import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CharactersComponent } from './characters/characters.component';
import { StarchipsComponent } from './starchips/starchips.component';
import { PlanetsComponent } from './planets/planets.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'LinkFilms', component: FilmsComponent },
  { path: 'LinkVehicles', component: VehiclesComponent },
  { path: 'LinkCharacter', component: CharactersComponent },
  { path: 'LinkStarchips', component: StarchipsComponent },
  { path: 'LinkPlanets', component: PlanetsComponent },
  { path: '', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
