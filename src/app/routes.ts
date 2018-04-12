import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PuebloComponent } from './pueblo/pueblo.component';
import { SearchComponent } from './search/search.component';
import { VisualizarFotosComponent } from './visualizar-fotos/visualizar-fotos.component';

export const routes: Routes = [
    //{ path: '', component: AppComponent },
    { path: 'pueblo', component:PuebloComponent},
    { path: 'search', component:SearchComponent},
    { path: 'fotos', component:VisualizarFotosComponent}
];
