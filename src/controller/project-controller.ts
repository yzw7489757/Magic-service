import ProjectService from '../service/project-service';
import { Context } from 'koa';

export default class ProjectController {
  /**
   * 新增子应用
   *
   * @static
   * @param {Context} ctx
   * @memberof ProjectController
   */
  static async addNewProject (ctx:Context){
    ctx.body = await ProjectService.addNewProject(ctx)
  }

  /**
   * 查询子应用列表
   *
   * @static
   * @param {Context} ctx
   * @memberof ProjectController
   */
  static async getProjectList(ctx:Context){
    ctx.body = await ProjectService.getProjectList(ctx)
  }
}