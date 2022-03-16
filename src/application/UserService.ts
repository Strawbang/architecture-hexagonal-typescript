import { IUserRepo } from "../infrastructure/IUserRepo";
import { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode} from 'http-status-codes';
import { autoInjectable, singleton } from "tsyringe";

@singleton()
@autoInjectable()
export default class UserService {
    private userRepo: IUserRepo;

    constructor (userRepo: IUserRepo) { // and here
      this.userRepo = userRepo;
    }

    async getUsers() : Promise<void> {
        try {
            const users = await this.userRepo.getUsers();
        } catch (error) {
            // return {
            //     status: 400,
            //     data: {
            //         message: "Une erreur est survenue lors de la récupération des utilisateurs. Veuillez réessayer.",
            //         error: error.message,
            //     }
            // };
        }
    }
}