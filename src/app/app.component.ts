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
  k4 = '';k1 = '';k = 0;k2 = '';k3 = '';
  colors = ['azul', 'rojo', 'verde', 'amarillo'];
  start = ['azul', 'azul', 'azul']
  enDis = ['enabled', 'disabled'];
  final = ['verde','amarillo','verde'];
  color1234 = [];

  changeColors(k) {
    switch (this.start[k]) {
      case this.colors[0]: {
        this.start[k] = this.colors[1];
        this.color1234[0] = this.colors[k];
        k=+1;
        break;
      }case this.colors[1]:{
        this.start[k] = this.colors[2];
        this.color1234[1] = this.colors[k];
       k=+1;
        break;
      }case this.colors[2]:{
        this.start[k] = this.colors[3];
        this.color1234[2] = this.colors[k];
        k=+1;
        break;
      }case this.colors[3]:{
        this.start[k] = this.colors[0];
        this.color1234[3] = this.start[k];
        k=+1;
        break;
      }
    }

  }
i= 0;
  validar(k){
    for( this.i = 0; this.i < this.final.length; this.i++){
      if(this.final[this.i] == this.start[this.i]){
        console.log(this.final[this.i]);
      console.log(this.start[this.i]);
      }
    }
    /*
    if((this.final[0]) == this.start[0]){
      //this.k1 = 'puta';
      console.log(this.final[k]);
      console.log(this.start[k]);
  }if((this.final[1]) == this.start[1]){
    //this.k1 = 'puta';
    console.log(this.final[k]);
    console.log(this.start[k]);
}if((this.final[2]) == this.start[2]){
  //this.k1 = 'puta';
  console.log(this.final[k]);
  console.log(this.start[k]);
}*/
  
  }
 
  blockButtons(){
    if(this.showElement){
      
      this.showElement = false;
      this.estat = 'aceptar';
      this.validar(this.k);            
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
