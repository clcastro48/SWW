import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public componenti: AppComponent) { }

  ngOnInit(): void {
    this.componenti.inicio = true;
    this.componenti.cambiar_fondo();
  }

  salirInicio() {
    this.componenti.inicio = false;
    this.componenti.cambiar_fondo();
  }

}
