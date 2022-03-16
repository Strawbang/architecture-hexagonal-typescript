import { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode} from 'http-status-codes';
import { Controller, Get } from 'routing-controllers';
import { autoInjectable, inject, injectable } from 'tsyringe';
import UserService from './UserService';

/**
 * @class UserController
 * @desc Responsible for handling API requests for the
 * /user route.
 **/
@injectable()
@Controller()
export class UserController {
  private userService: UserService;

  constructor (@inject("UserService")UserService?: UserService) {
    this.userService = UserService;
  }

  @Get('/users')
  async handleGetUsers (req, res): Promise<void> {
    try {
      const users = await this.userService.getUsers()
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: error.message });
    }
  }
}