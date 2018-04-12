import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizarFotosComponent } from './visualizar-fotos.component';
import { VisualizarFotosService } from "./visualizar-fotos.service";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [VisualizarFotosComponent],
  providers : [VisualizarFotosService, HttpClientModule],
  exports: [VisualizarFotosComponent]
})
export class VisualizarFotosModule { }
