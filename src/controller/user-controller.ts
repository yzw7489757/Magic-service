import UserService from '../service/user-service';
import { Context } from 'koa';

export default class UserController {
  static async register(ctx:Context) {
    ctx.body = await UserService.register(ctx)
  }

  static async login(ctx:Context){
    ctx.body = await UserService.login(ctx)
  }
}