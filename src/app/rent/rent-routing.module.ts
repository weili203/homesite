import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ActiveRentComponent } from './activeRent.component'
import { HistoryComponent } from './history.component'
import { TenantDetailsComponent } from "./tenantDetails.component";

const routes : Routes = [
    //{ path: '', pathMatch: 'full', redirectTo: 'activerent', },
    { path: 'activerent', component: ActiveRentComponent },    
    { path: 'renthistory', component: HistoryComponent }, 
    { path: 'tenant/:lastName', component: TenantDetailsComponent }
]; 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RentRoutingModule{ }

export const routableComponents = [
    ActiveRentComponent,
    HistoryComponent,
    TenantDetailsComponent
    ];