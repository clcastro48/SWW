import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {CharactersSWWService} from './services/characters-sww.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  listCharacters: [];

  constructor(private characterSWWService: CharactersSWWService) { 
    
    this.listCharacters = [];
 
    this.fillCharacters();
    
  }

  fillCharacters(){
    this.characterSWWService.getAllCharacters().subscribe(
      (data) => {
        console.log('DATA: '+data['results']);
        this.listCharacters = data['results'];
      }
    );
  }


  ngOnInit(): void {
  }


}
