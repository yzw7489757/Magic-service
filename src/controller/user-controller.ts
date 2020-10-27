import UserService from '../service/user-service';
import { Context } from 'koa';

export default class UserController {
  /**
   * register 注册
   * @param ctx 
   */
  static async register(ctx: Context): Promise<Context> {
    ctx.body = await UserService.register(ctx);
    return ctx;
  }

  /**
   * Login 登录
   * @param ctx 
   */
  static async login(ctx: Context): Promise<Context> {
    ctx.body = await UserService.login(ctx);
    return ctx;
  }
}
