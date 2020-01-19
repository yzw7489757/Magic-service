import ProjectService from '../service/application-service';
import { Context } from 'koa';

export default class ProjectController {
  /**
   * 新增子应用
   *
   * @static
   * @param {Context} ctx
   * @memberof ProjectController
   */
  static async addNewProject(ctx: Context): Promise<Context> {
    ctx.body = await ProjectService.addNewProject(ctx);
    return ctx;
  }

  /**
   * 查询子应用列表
   *
   * @static
   * @param {Context} ctx
   * @memberof ProjectController
   */
  static async getProjectList(ctx: Context): Promise<Context> {
    ctx.body = await ProjectService.getProjectList(ctx);
    return ctx;
  }

  /**
   * 更新子应用信息
   *
   * @static
   * @param {Context} ctx
   * @returns {Promise<Context>}
   * @memberof ProjectController
   */
  static async updateProject(ctx: Context): Promise<Context> {
    ctx.body = await ProjectService.updateProject(ctx);
    return ctx;
  }
}
