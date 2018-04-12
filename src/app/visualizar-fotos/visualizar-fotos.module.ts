import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizarFotosComponent } from './visualizar-fotos.component';
import { VisualizarFotosService } from "./visualizar-fotos.service";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [VisualizarFotosComponent, FormularioComponent],
  providers : [VisualizarFotosService, HttpClientModule],
  exports: [VisualizarFotosComponent]
})
export class VisualizarFotosModule { }
