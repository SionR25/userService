/**
 * Inherits from User
 * Specific to an individual user of the system
 */

import Address from "./Address";
import Company from "./Company";
import User from "./User";

export default class Person extends User {
    firstName?: string;
    surname?: string;
    address?: Address;
    employer?: Company;

    constructor(email: string, id?: string, firstName?: string, surname?: string, address?: Address) {
        super(email, id);
        if (firstName){
            this.firstName = firstName;
        };
        if (surname) {
            this.surname = surname;
        };
        if (address) {
            this.address = address;
        };
    };

}