import UserService from '../service/user-service';
import { Context } from 'koa';

export default class UserController {
  static async register(ctx: Context): Promise<Context> {
    ctx.body = await UserService.register(ctx);
    return ctx;
  }

  static async login(ctx: Context): Promise<Context> {
    ctx.body = await UserService.login(ctx);
    return ctx;
  }
}
