import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent{
  
  num_p = 0;
  title = '';
  episodio = 0;
  parrafo = '';
  director = '';
  productor = '';
  fecha_lanzamiento = '';
  nombre = '';
  lista_personajes = [];

  constructor(private peliculasServices: FilmsService) { }

  llamarPelicula(num_p){
    this.peliculasServices.getFilm(num_p).subscribe(
      (data) => {
        console.log('DATA: ', data);
        this.title = data['title'];
        this.episodio = data['episode_id'];
        this.parrafo = data['opening_crawl'];
        this.director = data['director'];
        this.productor = data['producer'];
        this.fecha_lanzamiento = data['release_date'];
        this.llamarPersonajes(data['characters']);
      }
    );
    document.getElementById('contdescripFilmstitle').style.display = "block";
    document.getElementById('contdescripFilms').style.display = "block";
    var myElement = document.getElementById('contdescripFilmstitle');
    var topPos = myElement.offsetTop;
    
  }

  llamarPersonajes(data){
    this.lista_personajes = [];
    for (var i = 0; i < data.length; i++) {
      this.peliculasServices.getCharacters(data[i]).subscribe(
        (data) => {
          console.log('DATA: ', data);
          this.nombre = data['name'];
          this.lista_personajes.push(this.nombre);
        }
      );
    }
  }

}
