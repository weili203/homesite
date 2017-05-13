export class Tenant {
    firstName : string;
    lastName : string;
    dateOfBirth: Date;
    movedInDate: Date;
    gender : Gender;
}

export enum Gender{
    undefined = -1,
    male = 0,
    female = 1,
    mixed = 2,
}