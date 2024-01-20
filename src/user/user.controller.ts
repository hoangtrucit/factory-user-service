import { Controller, Get, Inject } from '@nestjs/common';
import { USER_TOKEN_SERVICE, UserService } from './user.service';
import {
  UserServiceController,
  UserServiceControllerMethods,
} from '@share/protobuf/gRPC/generate/index.app.payment.user.service.v1';

@Controller('user')
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(@Inject(USER_TOKEN_SERVICE) private userService: UserService) {}

  @Get('/v1')
  async getUsers() {
    console.log(
      '🚀🚀🚀 file: user.controller.ts [line 15] call method getUsers',
    );
    return {
      users: await this.userService.get(),
    };
  }
}
