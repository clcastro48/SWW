import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu-naveg',
  templateUrl: './menu-naveg.component.html',
  styleUrls: ['./menu-naveg.component.css']
})
export class MenuNavegComponent implements OnInit {

  constructor(public componenti: AppComponent) { }

  ngOnInit(): void {
  }

  irInicio() {
    this.componenti.inicio = true;
    this.componenti.cambiar_fondo();
  }

}
