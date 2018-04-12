import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IFoto } from '../../shared/foto';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  foto:IFoto={
    albumId:0,
    id:0,
    title:'',
    url:'',
    thumbnailUrl:''
  };

  @Output() PasameLaFoto=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  subirFoto(formFoto: NgForm){
    this.PasameLaFoto.emit({foto:this.foto});
    //formFoto.reset();
  }

  reset(formFoto: NgForm){
    formFoto.reset();
  }

}
