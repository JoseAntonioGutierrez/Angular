import { Component, OnInit } from '@angular/core';
import { Prueba } from '../prueba';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-pruebapipes',
  templateUrl: './pruebapipes.component.html',
  styleUrls: ['./pruebapipes.component.css']
})
export class PruebapipesComponent implements OnInit {

   a:number=20;
   b:number=0.356297;
   f:Date=new Date();
   data:Prueba[]=[new Prueba(1,"Jose"),new Prueba(2,"Juan"),new Prueba(3,"Pepe")];
   minus:string='ESPAÑA';
   mayus:string='españa';
   timer:number;
   timerAsync:Observable<number>;

  constructor() { }
    
  ngOnInit() {
    this.timerAsync=Observable.interval(1000).startWith(0);
    let timerBase=Observable.interval(1000).startWith(0).subscribe(num=>{
      this.timer=num;
    });
  }

}
