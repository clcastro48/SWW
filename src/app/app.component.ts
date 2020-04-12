import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWW';
  inicio = true;

  cambiar_fondo () {
    if(this.inicio===true){
      document.body.style.backgroundImage = 'url("./assets/imagenes/1.jpg")';
    }
    else{
      document.body.style.backgroundImage = 'url("./assets/imagenes/espacio5.jpg")';
    }
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }
}
