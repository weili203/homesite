import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IRentService, RentService } from './rent.service'
import { RentComponent } from './rent.component'
import { ActiveRentComponent } from './activeRent.component'

@NgModule({
    imports: [CommonModule],
    providers:[{provide: "IRentService", useClass: RentService}],
    declarations : [RentComponent, ActiveRentComponent],
})
export class RentModule{

}