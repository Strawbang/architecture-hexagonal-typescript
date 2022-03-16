import Person from "./Person";

export default class User {
    constructor(
        public readonly username: string,
        public readonly password: string,
        public readonly details: Person,
    ){}

}