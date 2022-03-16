import User from "../domain/User";

export interface IUserRepo {
    getUsers (): Promise<User>
}