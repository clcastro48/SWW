import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private HttpClient: HttpClient) { }

  getFilm(num_p) {
    return this.HttpClient.get('http://swapi.py4e.com/api/films/'+num_p);
  }

  getCharacters(apiurl){
    return this.HttpClient.get(apiurl);
  }

}
