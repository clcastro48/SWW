import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor( private httpClient: HttpClient){
    
  }


  getPlaneta () {
    const planeta  = {name: "Tatooine" , rotation_period : "24" , poblacion : "2000"};
    return planeta;
    
  }

  TraerTodosPlanetas (){
     
    return this.httpClient.get(' https://swapi.dev/api/planets/ ');

  }

}
