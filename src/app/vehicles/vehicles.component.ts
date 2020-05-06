import { Component, OnInit } from '@angular/core';
import { NavesService } from '../naves.service';



@Component({
  selector: 'app-vehicles',
  templateUrl:'./vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  
  listadepeliculas: [];

 constructor (private navesservice: NavesService) {

  this.listadepeliculas = [];


  
  this.llenarlistadepeliculas ();
 }

 llenarlistadepeliculas () {

  this.navesservice.traertodaslaspeliculas ().subscribe (
    (data) => {
      console.log ("DATA: " ,data);
      this.listadepeliculas = data [ "results" ];

    }
  );
  
 }


  ngOnInit(): void {
  }

} 
