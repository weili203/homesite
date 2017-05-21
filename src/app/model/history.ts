import {Tenant } from './tenant';
import {Room } from './room';

export class History {
    room : Room;
    price : number;
    movedInDate: Date;
    movedOutDate: Date;
    occupants : Tenant[];
}
