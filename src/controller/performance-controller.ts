import { Context } from 'koa';
import PerformanceService from '../service/performance-service';

export default class PerformanceController {
  static async insert(ctx: Context): Promise<Context> {
    ctx.body = await PerformanceService.insert(ctx)
    return ctx
  }

  static async list(ctx: Context): Promise<Context>{
    ctx.body = await PerformanceService.list(ctx)
    return ctx
  }
}