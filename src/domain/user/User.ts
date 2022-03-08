import IUser from "./IUser";

export default class User implements IUser {
    username: string;
    password: string;

    constructor(username: string, password: string){
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