import { inject, injectable, registry } from "tsyringe";
import IUserRepo from "../infrastructure/User/IUserRepo";
import { UserRepo } from "../infrastructure/User/UserRepo";

/**
 * @class UserService
 * @desc Responsible for handling Controller
 **/


@injectable()
@registry([
    {
      token: 'IUserRepo',
      useToken: UserRepo,
    }
  ])
export class UserService {

    constructor (
        @inject('IUserRepo') private userRepo: IUserRepo) { // and here
    }

    async getUsers() : Promise<object> {
        try {
            const users = await this.userRepo.getUsers();
            // console.log(users);
            // return await 'test';
            return users;
        } catch (error) {
            return await error;
        }
    }
}
