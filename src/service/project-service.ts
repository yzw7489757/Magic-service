import { Context } from 'koa';
import { getManager } from 'typeorm';
import Application from '../entity/application';

export default class ProjectService {
  static async addNewProject(ctx?:Context){
    const projectRepository = getManager().getRepository(Application)
    console.log(ctx.request.body)
    // projectRepository.create({

    // })
    // projectRepository.save()
    // ctx.body = 
  }

  static async getProjectList(ctx?:Context){
    
  }
}