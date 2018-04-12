import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  buscar:string='';
  @Input() datos:string[];
  resultado:string='';

  constructor() { 
  }

  ngOnInit() {
  }

  iniciarBusqueda(event) : void {
    let buscar=this.buscar;
    let found=this.datos.find(function(element){
      return element===buscar;
    });
    this.resultado = found || 'Busqueda no encontrada';
  }
}
