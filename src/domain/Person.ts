import Address from "./Address";

export default class Person extends Address {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string, street: string, city: string, department: number, streetNumber: number, area: string, zipcode: number){
        super(street, city, department, streetNumber, area, zipcode);
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFirstname():string{
        return this.firstname;
    }

    setFirstname(firstname: string){
        this.firstname = firstname;
    }

    getLastname():string{
        return this.lastname;
    }

    setLastname(lastname: string){
        this.lastname = lastname;
    }

}