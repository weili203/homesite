import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap';

//import { Ng2TableModule } from 'ng2-table/ng2-table';

import { IRentService, RentService } from './rent.service'
import { RentComponent } from './rent.component'
//import { ActiveRentComponent } from './activeRent.component'
import { RoomDetailModalComponent } from './roomDetailModal.component'
//import { HistoryComponent } from "./history.component";

import { RentRoutingModule, routableComponents } from "./rent-routing.module";

@NgModule({
    imports: [CommonModule, ModalModule.forRoot(), RentRoutingModule],
    providers:[{provide: "IRentService", useClass: RentService}],
    declarations : [RentComponent, routableComponents, RoomDetailModalComponent],
})
export class RentModule{

}