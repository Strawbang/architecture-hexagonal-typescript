import User from "../domain/User";

export default interface IUserRepo {
    getUsers (): Promise<User>
}