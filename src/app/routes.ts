import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PuebloComponent } from './pueblo/pueblo.component';
import { SearchComponent } from './search/search.component';
import { VisualizarFotosComponent } from './visualizar-fotos/visualizar-fotos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PruebapipesComponent } from './pruebapipes/pruebapipes.component';

export const routes: Routes = [
    { path: 'not-found', component: NotfoundComponent}, 
    { path: '', component:PuebloComponent},
    { path: 'pueblo', component:PuebloComponent},
    { path: 'search', component:SearchComponent},
    { path: 'fotos', component:VisualizarFotosComponent},
    { path: 'pipes', component:PruebapipesComponent},
    { path: '**', redirectTo: 'not-found' }
];
