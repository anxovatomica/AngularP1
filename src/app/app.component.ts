import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  saludo = 'Hola loka';
  estado = 'alerta';
  color = 'amarillo';

  showElement = true;

  arrayEstados = ['triste', 'alegre', 'motivado'];
  arrayButtons = ['boto1', 'boto2', 'boto3'];
  
  clickEstado(k, nomEstado) {
    console.log(nomEstado);
    this.arrayEstados[k] = 'cansado';
  }
  showHideTitle() {
    this.showElement = !this.showElement;
  }

  colors = ['azul', 'rojo', 'verde', 'amarillo'];
  start = ['amarillo', 'amarillo', 'amarillo']

  changeColors(k) {
    switch (this.start[k]) {
      case this.colors[0]: {
        this.start[k] = this.colors[1];
        console.log("rojo");
        break;
      }case this.colors[1]:{
        this.start[k] = this.colors[2];
        break;
      }case this.colors[2]:{
        this.start[k] = this.colors[3];
        break;
      }case this.colors[3]:{
        this.start[k] = this.colors[0];
        break;
      }
    }
  }


  changeEstado() {
    if (this.estado == 'alerta') {
      this.estado = 'info';
    } else {
      this.estado = 'alerta';
    }
  }



}
