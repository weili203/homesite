import {Tenant } from './tenant';

export class Room {
    id: number;
    name : string;
    isRentedOut : boolean;
    size : RoomSize;
    isEnSuite : boolean;
    hasBalcony : boolean;
    occupants : Tenant[];
    price: number;
    photoSrc : string;
}

export enum RoomSize{
    single = 0,
    double = 1
}