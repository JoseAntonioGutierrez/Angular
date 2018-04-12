import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { PuebloComponent } from './pueblo/pueblo.component';
import { SearchModule } from './search/search.module';
import { VisualizarFotosModule } from './visualizar-fotos/visualizar-fotos.module';
import { NavegadorComponent } from './navegador/navegador.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PruebapipesComponent } from './pruebapipes/pruebapipes.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    PuebloComponent,
    NavegadorComponent,
    NotfoundComponent,
    PruebapipesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    VisualizarFotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
