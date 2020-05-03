import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersSWWService {

  constructor(private httpClient: HttpClient) { }

  getCharacter(){
    const character = { 
      title: 'Luke Skiwalker',
      espisode_id: 1,
      director: 'El profesor'
    };
    return character; 
  }

  getAllCharacters(){
    return this.httpClient.get('https://swapi.py4e.com/api/people');
  }

  getLuke(){
    return this.httpClient.get('https://swapi.py4e.com/api/people/1');
  }
}
