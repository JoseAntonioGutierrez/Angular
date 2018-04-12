import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  prueba : string='';
  pais : string;
  ciudad : string;
  puebloRecibido : string;
  datosDelArray : string[];

  ngOnInit():void{
    this.pais='España';
    this.ciudad='Andujar';
    this.datosDelArray=["Jaen","Almeria","Cadiz","Sevilla","Malaga"];
  }

  showPueblo(data) : void{
    this.puebloRecibido=data.nombre;
  }

}
