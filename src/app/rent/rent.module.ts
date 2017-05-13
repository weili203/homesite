import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap';

import { IRentService, RentService } from './rent.service'
import { RentComponent } from './rent.component'
import { ActiveRentComponent } from './activeRent.component'
import { RoomDetailModalComponent } from './roomDetailModal.component'

@NgModule({
    imports: [CommonModule, ModalModule.forRoot()],
    providers:[{provide: "IRentService", useClass: RentService}],
    declarations : [RentComponent, ActiveRentComponent, RoomDetailModalComponent],
})
export class RentModule{

}