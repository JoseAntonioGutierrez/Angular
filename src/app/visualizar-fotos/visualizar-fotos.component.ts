import { Component, OnInit } from '@angular/core';
import { IFoto } from '../shared/foto';
import { VisualizarFotosService } from './visualizar-fotos.service';

@Component({
  selector: 'app-visualizar-fotos',
  templateUrl: './visualizar-fotos.component.html',
  styleUrls: ['./visualizar-fotos.component.css']
})
export class VisualizarFotosComponent implements OnInit {

  fotos : IFoto[]=[];
  busqueda:number;
  mostrar:boolean=false;
  foto:IFoto;

  constructor(private servicio : VisualizarFotosService) { }

  ngOnInit() {
    this.servicio.getFotos().subscribe(resp=>{
      this.fotos=resp.body;
    });
  }

  buscar(){
    this.servicio.getFoto(this.busqueda).subscribe(resp=>{
      this.fotos=resp.body;
    });
  }

  subir(data) : void{
    this.fotos.push(data.foto);
  }

}
