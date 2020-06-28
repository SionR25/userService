import uuid from "uuid";

export default class Address {
    id: string;
    postcode: string;
    nameOrNumber: string;
    street: string;
    address2?: string;
    town: string;
    county: string;
    latitude: string;
    longitude: string;

    constructor(postcode: string, nameOrNumber: string, street: string, town: string, county: string, 
                latitude?: string, longitude?: string) {
        this.id = uuid();
        this.postcode = postcode;
        this.nameOrNumber = nameOrNumber;
        this.street = street;
        this.town = town;
        this.county = county;
        if (latitude && longitude) {
            this.latitude = latitude;
            this.longitude = longitude;
        } else {
            const latLong: any = this.retrieveLatLong(postcode);
            this.latitude = latLong.latitude;
            this.longitude = latLong.longitude;
        }
    }

    retrieveLatLong = (postcode: string): any => {
        return {
            "latitude": "latitude",
            "longitude": "longitude"
        }
    }
}