import {Component, Inject} from '@angular/core';
import {IRentService} from './rent.service';
import {Room} from '../model/room';

@Component({
    selector : 'active-rent',
    templateUrl : './activeRent.component.html'
})  
export class ActiveRentComponent{
    activelyRentedRooms : Room[];


    constructor(@Inject('IRentService') private rentService : IRentService) {
        this.activelyRentedRooms = this.rentService.getActivelyRentedRooms();
    }
}