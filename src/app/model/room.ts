import {Tenant, Gender } from './tenant';

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

/*
    matchRoomGender(gender : number): boolean {

        if (this._roomGender == Gender.undefined){
            var result : number;
            
            this.occupants.forEach(occupant => {
                result |= 1 << occupant.gender;
            });

            switch (result) {
                case 1:
                    this._roomGender = Gender.male;
                    break;
                case 2:
                    this._roomGender = Gender.female;
                    break;
                case 4:
                    this._roomGender = Gender.mixed;
                    break;
            }
        }

        return gender == this._roomGender;
    }

    private _roomGender : Gender = Gender.undefined;

    */
}

export enum RoomSize{
    single = 0,
    double = 1
}