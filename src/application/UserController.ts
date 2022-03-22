import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { Controller, Get, Req, Res } from 'routing-controllers';
import { injectable } from 'tsyringe';
import { UserService } from './UserService';

/**
 * @class UserController
 * @desc Responsible for handling API requests for the
 * /user route.
 **/


@Controller()
@injectable()
export default class UserController {

  constructor ( private UserService: UserService) {
    
  }

  @Get('/users')
  async handleGetUsers (@Req() req: any, @Res() res: any): Promise<void> {
    try {
      const response = await this.UserService.getUsers();
      return res.status(StatusCodes.OK).send(response)
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  }
}