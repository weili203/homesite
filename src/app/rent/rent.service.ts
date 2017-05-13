import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Room, RoomSize } from '../model/room';
import { Tenant, Gender } from '../model/tenant';


export interface IRentService{
    getAllRooms(): Room[];
    getActivelyRentedRooms() : Room[];
    getNotRentedRooms() : Room[];
}


@Injectable()
export class RentService implements IRentService {
    rooms : Room[];

    constructor(private http: Http) {
        this.rooms = [
            {
                id: 1,
                name : 'Room 1',
                isRentedOut : true,
                size : RoomSize.single,
                isEnSuite : false,
                hasBalcony : false,
                occupants : [{
                    firstName : 'firstname',
                    lastName : 'lastName',
                    dateOfBirth: new Date('1989-01-06T00:00:00'),
                    movedInDate: new Date ('2015-01-06T00:00:00'),
                    gender : Gender.female
                }],
                price: 598,
                photoSrc : '../img/room1.png'
            },
            {
                id: 2,
                name : 'Room 2',
                isRentedOut : true,
                size : RoomSize.double,
                isEnSuite : true,
                hasBalcony : false,
                occupants : [{
                    firstName : 'A X',
                    lastName : 'lastName',
                    dateOfBirth: new Date('1989-11-16T00:00:00'),
                    movedInDate: new Date ('2017-02-16T00:00:00'),
                    gender : Gender.male
                }],
                price: 830,
                photoSrc : '../../img/room2.png'
            },            
            {
                id: 3,
                name : 'Room 3',
                isRentedOut : true,
                size : RoomSize.double,
                isEnSuite : false,
                hasBalcony : true,
                occupants : [{
                    firstName : 'Vishal ',
                    lastName : 'Sahota',
                    dateOfBirth: new Date('1989-11-16T00:00:00'),
                    movedInDate: new Date ('2016-08-16T00:00:00'),
                    gender : Gender.male
                },
                {
                    firstName : 'first name 1 ',
                    lastName : 'last names',
                    dateOfBirth: new Date('1989-11-16T00:00:00'),
                    movedInDate: new Date ('2016-08-16T00:00:00'),
                    gender : Gender.male
                }
                ],
                price: 840,
                photoSrc : '../../img/room3.png'
            },            
            {
                id: 4,
                name : 'Room 4',
                isRentedOut : true,
                size : RoomSize.double,
                isEnSuite : false,
                hasBalcony : false,
                occupants : [{
                    firstName : 'Alex',
                    lastName : 'last name',
                    dateOfBirth: new Date('1989-11-16T00:00:00'),
                    movedInDate: new Date ('2016-06-16T00:00:00'),
                    gender : Gender.male
                }],
                price: 760,
                photoSrc : '../../img/room4.png'
            }  
        ];
    }
    
    /**
     * IRentService
     */
    getAllRooms(): Room[]{
        return this.rooms;
    }

    getActivelyRentedRooms() : Room[]
    {
        return this.getAllRooms().filter(room => room.isRentedOut);
    }

    getNotRentedRooms() : Room[]
    {
        return this.getAllRooms().filter(room => !room.isRentedOut);
    }

}