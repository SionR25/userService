/**
 * A super class responsible for managing user
 */

import uuid from 'uuid';

export default class User {

    id: string;
    email: string;

    constructor(email: string, id?: string) {
        this.email = email;
        if (id) {
            this.id = id;
        } else {
            this.id = uuid();
        }
    };

}