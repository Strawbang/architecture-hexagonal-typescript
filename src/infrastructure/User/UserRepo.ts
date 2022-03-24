import { injectable } from "tsyringe";
import User from "../../domain/User";
// import Address from "../../domain/Address";
// import Person from "../../domain/Person";
// import User from "../../domain/User";
import { sequelize } from "../Sequelize";
import IUserRepo from "./IUserRepo";
import { UserAdapter } from "./UserAdapter";
import UserModel from "./UserModel";

@injectable()
export class UserRepo implements IUserRepo {

    constructor( private UserAdapter: UserAdapter){

    }

    async getUsers (): Promise<User[]> {
      // Use Sequelize or TypeORM to retrieve the users from
      // a database.
      // console.log(this.UserAdapter.entityToModel(User))
      const userRepository = sequelize.getRepository(UserModel)
      await userRepository.create({ username: 'dbougouffa', password: 'test' })
      const users = await userRepository.findAll();
      return users.map((user) => this.UserAdapter.entityToModel(user));
      
      // const address = new Address('courtellemont', 'chalautre-la-grande', 77, 3, 'seine-et-marne', 77171)
      // const person = new Person('Djamel', 'Bougouffa', address);
      // return new User('djamel', 'test', person );
    }
  }