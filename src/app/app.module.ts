import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule }  from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FilmsComponent } from './films/films.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CharactersComponent } from './characters/characters.component';
import { StarchipsComponent } from './starchips/starchips.component';
import { PlanetsComponent } from './planets/planets.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { MenuNavegComponent } from './menu-naveg/menu-naveg.component';
import { FilmsService } from './films.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FilmsComponent,
    VehiclesComponent,
    CharactersComponent,
    StarchipsComponent,
    PlanetsComponent,
    CabeceraComponent,
    ContenidoComponent,
    MenuNavegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
