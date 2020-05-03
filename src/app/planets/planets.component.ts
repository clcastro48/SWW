import { Component, OnInit } from '@angular/core';
import { PlanetasService } from "../planetas.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  

 // planeta;
listaPlanetas: [];
  
  

  constructor(private PlanetasService : PlanetasService ){
    this.listaPlanetas = [];
    

  // this.planeta = this.Planetas.getPlaneta();
  this.llenarListaPlanetas();

  }

  llenarListaPlanetas (){
     this.PlanetasService.TraerTodosPlanetas ().subscribe (
      (data) => {
        console.log(" data " , data);
        this.listaPlanetas = data ["results"]; 


      }
    );
    this.listaPlanetas
  }

  

  ngOnInit(): void {  
  }

}
