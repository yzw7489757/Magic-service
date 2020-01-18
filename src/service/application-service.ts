import { Context } from 'koa';
import { getManager } from 'typeorm';
import Application from '../entity/application';
import { SuccessModel, ErrorModel } from '../utils/Response';
import { ApplicationModel } from '../interfaces/application';
import { queryGeneratorSql } from 'src/utils/queryToSql';
import { handlerPagination ,PageinMixin} from '../utils/handlerPagination';
import { getApplicationListValidator, insertApplicationValidator } from '../validator/application';

export default class ProjectService {
  static async addNewProject(ctx?: Context): Promise<ErrorModel | SuccessModel> {
    const projectRepository = getManager().getRepository(Application)
    const projectInfo: ApplicationModel = ctx.request.body

    const newProjectData = projectRepository.create({
      projectName: projectInfo.projectName,
      platform: projectInfo.platform,
      createTime: projectInfo.createTime,
      running: projectInfo.running,
      creator: projectInfo.creator
    })

    const error = insertApplicationValidator(newProjectData)

    if (error) {
      return new ErrorModel({ error, message: '数据格式错误' })
    }
    projectRepository.save(newProjectData)
    return new SuccessModel(null, '添加成功')
  }

  static async getProjectList(ctx?: Context): Promise<ErrorModel | SuccessModel> {
    const projectRepository = getManager().getRepository(Application)

    interface Application extends ApplicationModel,PageinMixin{}

    const projectInfo: Application = handlerPagination<ApplicationModel>(ctx.request.query)
  
    const error = getApplicationListValidator(projectInfo)
    
    if (error) {
      console.log('error: ', error);
      return new ErrorModel({ error, message: '数据格式错误' })
    }
    const { pageSize, pageNum, ...others } = projectInfo

    const result = projectRepository
      .createQueryBuilder("application")
      .where(...queryGeneratorSql(others, 'application'))
      .orderBy("application.id", 'ASC')
      
    const list = await result.offset((pageNum - 1) * pageSize).limit(pageSize).getMany()
    const count = await result.getCount()
    const countPage = Math.round(count/pageSize)

    return new SuccessModel({ list, count, countPage, pageNum, pageSize })
  }
}
