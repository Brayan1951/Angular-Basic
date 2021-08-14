import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Iron man','Hulk','thor'];

  heroeB:string='';
  borrarHeroe():void{
    this.heroeB = this.heroes.shift() ||'';
   
  };
}
