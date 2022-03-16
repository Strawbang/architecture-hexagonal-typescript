import { singleton } from "tsyringe";
import User from "../domain/User";
import { IUserRepo } from "./IUserRepo";

@singleton()
export class UserRepo implements IUserRepo {
  
    getUsers (): Promise<User> {
      // Use Sequelize or TypeORM to retrieve the users from
      // a database.
      return;
    }
  }