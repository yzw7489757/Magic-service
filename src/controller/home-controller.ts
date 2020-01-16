import HomeService from '../service/home-service';
import { Context } from 'koa';

export default class HomeController {
  static async hello(ctx: Context): Promise<Context>{
    ctx.body = await HomeService.hello();
    return ctx
  }
}
