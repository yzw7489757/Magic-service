import { Context } from 'koa';
import PerformanceService from '../service/performance-service';

export default class PerformanceController {
  static async insert(ctx:Context) {
    ctx.body = await PerformanceService.insert(ctx)
  }

  static async list(ctx:Context){
    ctx.body = await PerformanceService.list(ctx)
  }
}