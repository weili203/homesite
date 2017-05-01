import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found.component'
import { RentComponent } from './rent/rent.component'

const routes : Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'rent', },
    { path: 'rent', component: RentComponent },    
    { path:'**', pathMatch:'full', component:PageNotFoundComponent}
]; 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }

export const routableComponents = [
    PageNotFoundComponent
    ];