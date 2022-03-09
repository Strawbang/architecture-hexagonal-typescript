import IUser from "./IUser";
import Person from "./Person";

export default class User extends Person implements IUser {
    username: string;
    password: string;

    constructor(firstname: string, lastname: string, username: string, password: string){
        super(firstname, lastname);
        this.username = username;
        this.password = password;
    }

    getUsername():string{
        return this.username;
    }

    setUsername(username: string){
        this.username = username;
    }

    getPassword():string{
        return this.password;
    }

    setPassword(password: string){
        this.password = password;
    }

}