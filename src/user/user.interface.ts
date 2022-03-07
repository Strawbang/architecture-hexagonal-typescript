export default interface UserInterface {
    username: string;
    password: string;
    getUsername:() => string;
    setUsername(username: string);
    getPassword:() => string;
    setPassword(password: string);
    initValue:() => string;
}