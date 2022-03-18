import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { Controller, Get, Req, Res } from 'routing-controllers';
import { autoInjectable, delay, inject, injectable, injectAll } from 'tsyringe';
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
      console.log('1');
      console.log(this);
      console.log(this.UserService);
      // const response = this.UserService.getUsers();
      console.log('3');
      // console.log(response);
      return await res.status(StatusCodes.OK).send('test')
    } catch (error) {
      console.log(error.message);
      return await res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  }
}