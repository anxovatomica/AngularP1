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

  showElement=true;

  arrayEstados=['triste', 'alegre', 'motivado'];
  clickEstado(k, nomEstado){
    console.log(nomEstado);
    this.arrayEstados[k]= 'cansado';
  }
  showHideTitle(){
    this.showElement=!this.showElement;
  }

  changeEstado(){
    if(this.estado == 'alerta'){
      this.estado = 'info';
    }else{
      this.estado='alerta';
    }
  }
}
