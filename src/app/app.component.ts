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
  show: boolean;
  mostra: boolean = true;
  ensenya:boolean = true;
  showElement = false;
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
  start = ['verde', 'verde', 'verde']
  enDis = ['enabled', 'disabled'];
  final = [];
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
id = ["azulVerde", "amarilloVerde", "azulVerde"];

save(){
for(let i = 0; i < this.start.length; i++){
  this.final[i] = this.start[i];
}
this.mostra = false;
this.ensenya = true;
}
  validar(k){
      if(this.final[0] == this.start[0]){
        this.id[0] = "verde";
        this.combi[0] = this.start[0];
      }if(this.final[1] == this.start[1]){
       this.id[1] = "verde"
       this.combi[1] = this.start[1];
      }if(this.final[2] == this.start[2]){
        this.id[2] = "verde";
        this.combi[2] = this.start[2];
      }if(this.final[0] != this.start[0]) {
        this.id[0] = "rojo";
        this.combi[0] = this.start[0];
      }if(this.final[1] != this.start[1]){
        this.id[1] = "rojo"
        this.combi[1] = this.start[1];
      }if(this.final[2] != this.start[2]){
        this.id[2] = "rojo";
        this.combi[2] = this.start[2];
      }if(this.final[0] == this.start[0] && this.final[1] == this.start[1] && this.final[2] == this.start[2]){
        this.show = true;
        this.torna = true;
      }
    }
      hey:boolean = true;
 combi = [];
  blockButtons(){
    if(this.showElement){
      this.ensenya = true;
      this.showElement = false;
      this.estat = 'aceptar';
      this.validar(this.k);            
    }else{
      this.showElement = true;
      this.estat = 'validar'
      this.mostra = false; 
    }
  }


    name:string;
    is_edit: boolean; 
    constructor() {
      this.name = 'Angular2'
      this.is_edit = true;
    }
  
  torna:boolean = false;

  reinicia(){
    for(let i = 0; i < this.final.length; i++){
      this.final[i] = null;
    }
    this.show = false;
    this.torna = false;
    this.mostra = true;
    this.ensenya = false;
  }
  changeEstado() {
    if (this.estado == 'alerta') {
      this.estado = 'info';
    } else {
      this.estado = 'alerta';
    }
  }
}

