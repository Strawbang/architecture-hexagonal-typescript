import Address from "./Address";

export default class Person {
    constructor(
        public readonly firstname: string,
        public readonly lastname: string,
        public readonly address : Address
    ){
    }

}