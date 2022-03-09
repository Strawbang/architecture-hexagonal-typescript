export default interface IUser {
    username: string;
    password: string;
    getUsername:() => string;
    setUsername(username: string);
    getPassword:() => string;
    setPassword(password: string);
}