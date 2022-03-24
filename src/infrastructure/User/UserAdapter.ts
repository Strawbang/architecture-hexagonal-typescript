import User from "../../domain/User";
import UserModel from './UserModel';

export class UserAdapter {

    entityToModel(model: User): any {
        return {...model };
    }

    modelToEntity(entity: UserModel): void {
        // return new User(entity);
    }
}