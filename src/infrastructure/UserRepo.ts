import { injectable } from "tsyringe";
import Address from "../domain/Address";
import Person from "../domain/Person";
import User from "../domain/User";
import IUserRepo from "./IUserRepo";

@injectable()
export class UserRepo implements IUserRepo {

    async getUsers (): Promise<User> {
      // Use Sequelize or TypeORM to retrieve the users from
      // a database.
      const address = new Address('courtellemont', 'chalautre-la-grande', 77, 3, 'seine-et-marne', 77171)
      const person = new Person('Djamel', 'Bougouffa', address);
      return new User('djamel', 'test', person );
    }
  }