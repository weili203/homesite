import { Component, Input, ViewChild } from "@angular/core";
import { ModalDirective } from 'ng2-bootstrap';

import { Room } from "../model/room";

@Component({
    selector : 'room-detail-modal',
    templateUrl : './roomDetailModal.component.html'
})
export class RoomDetailModalComponent{
    @Input() room : Room;
    @ViewChild('childModal') childModal : ModalDirective;

    constructor(){
        this.room = new Room();
    }

    public Show() : void {
        this.childModal.show();
    }

    hideChildModal():void {
        this.childModal.hide();
    }

}