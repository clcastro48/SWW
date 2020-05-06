import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  
  constructor(private httpclient: HttpClient) { }


  getpelicula () {
    const pelicula = { title: "The Force Awakens", episode_id: 2, director: "el profesor"}

    return pelicula;
  }
traertodaslaspeliculas () {
          return this.httpclient.get ("http://swapi.py4e.com/api/films/");
}

getvehicles (apiurl){

  return this.httpclient.get (apiurl);
}


}
