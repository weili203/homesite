import { Component, Inject, ViewChild  } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { IRentService } from './rent.service';
import { Room } from '../model/room';
import { RoomDetailModalComponent } from './roomDetailModal.component'

@Component({
    selector : 'active-rent',
    templateUrl : './activeRent.component.html',
    styleUrls : ['./activeRent.component.css']
})  
export class ActiveRentComponent{
    activelyRentedRooms : Room[];
    selectedRoom : Room;
    @ViewChild(RoomDetailModalComponent) roomDetailModal : RoomDetailModalComponent;


    constructor(@Inject('IRentService') private rentService : IRentService) {
        this.activelyRentedRooms = this.rentService.getActivelyRentedRooms();
    }


    clickedRoom(room : Room) : void {
        this.selectedRoom = room;
        this.roomDetailModal.Show();
    }


}