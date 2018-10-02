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
  estat = 'aceptar';

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
  start = ['azul', 'azul', 'azul']
  enDis = ['enabled', 'disabled'];
  color1 = ''; color2 = ''; color3 = ''; color4 = '';
  color1234 = [];
  changeColors(k) {
    switch (this.start[k]) {
      case this.colors[0]: {
        this.start[k] = this.colors[1];
        this.color1234[0] = this.colors[k];
        break;
      }case this.colors[1]:{
        this.start[k] = this.colors[2];
        this.color1234[1] = this.colors[k];
        break;
      }case this.colors[2]:{
        this.start[k] = this.colors[3];
        this.color1234[2] = this.colors[k];
        break;
      }case this.colors[3]:{
        this.start[k] = this.colors[0];
        this.color1234[3] = this.start[k];
        break;
      }
    }
  }

 
  blockButtons(){
    if(this.showElement){
      
      this.showElement = false;
      this.estat = 'aceptar';
    }else{
      this.showElement = true;
      this.estat = 'validar'

    }

  }


    name:string;
    is_edit: boolean; 
    constructor() {
      this.name = 'Angular2'
      this.is_edit = true;
    }
  

  


  changeEstado() {
    if (this.estado == 'alerta') {
      this.estado = 'info';
    } else {
      this.estado = 'alerta';
    }
  }



}
