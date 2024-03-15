import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:"Portafolio", title:"Portafolio", 
    loadComponent:() => import ('./portafolio/portafolio.component')
}];
