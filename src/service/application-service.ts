import { Context } from 'koa';
import { getManager } from 'typeorm';
import Application from '../entity/application';
import { SuccessModel, ErrorModel } from '../utils/Response';
import { ApplicationModel } from '../interfaces/application';
import { queryGeneratorSql } from 'src/utils/queryToSql';
import validatorApplication from '../validator/application';
import { handlerPagination } from '../utils/handlerPagination';

export default class ProjectService {
  static async addNewProject(ctx?: Context): Promise<ErrorModel | SuccessModel> {
    const projectRepository = getManager().getRepository(Application)
    const projectInfo: ApplicationModel = ctx.request.body
    const newProjectData = projectRepository.create({
      projectName: projectInfo.projectName,
      platform: projectInfo.platform,
      createTime: projectInfo.createTime,
      running: projectInfo.running || false,
      creator: projectInfo.creator
    })
    projectRepository.save(newProjectData)
    return new SuccessModel(null, '添加成功')
  }

  static async getProjectList(ctx?: Context): Promise<ErrorModel | SuccessModel> {
    const projectRepository = getManager().getRepository(Application)
    const projectInfo = handlerPagination(ctx.request.query)
    // const sqlForm = { 
    //   projectName: projectInfo.projectName,
    //   running: !!Number(projectInfo.running),
    //   creator: projectInfo.creator
    // }
    try {
      validatorApplication(projectInfo)
    } catch (e) {
      return new ErrorModel(e)
    }
    const { pageSize = 1, pageNum = 10000, ...others } = { ...projectInfo, running: !!Number(projectInfo.running) }

    const result = await projectRepository
      .createQueryBuilder("application")
      .where(...queryGeneratorSql(others, 'application'))
      .orderBy("application.id", 'ASC')
      .offset((pageNum - 1) * pageSize)
      .limit(pageSize)
      .getMany()


    return new SuccessModel({ list: result, pageNum, pageSize })
  }
}