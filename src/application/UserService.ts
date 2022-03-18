import { delay, inject, injectable, registry, singleton} from "tsyringe";
import IUserRepo from "../infrastructure/IUserRepo";
import { UserRepo } from "../infrastructure/UserRepo";

/**
 * @class UserService
 * @desc Responsible for handling API requests for the
 **/


@injectable()
@registry([
    {
      token: "IUserRepo",
      useToken: delay(() => UserRepo)
    }
  ])
export class UserService {

    constructor (
        @inject('IUserRepo') private userRepo?: IUserRepo) { // and here
    }

    async getUsers() : Promise<string> {
        try {
            console.log('2')
            // const users = await this.userRepo.getUsers();
            // const username = users.username;
            // console.log(users.username);
            return await 'test';
        } catch (error) {
            return await error;
        }
    }
}
