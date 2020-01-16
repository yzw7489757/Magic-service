import { Context } from 'koa';
import { getManager } from 'typeorm';
import Application from '../entity/application';
import { SuccessModel ,ErrorModel} from '../utils/Response';
import { ApplicationModel } from '../interfaces/application';

type Response = typeof SuccessModel;
// type r = retur
export default class ProjectService {
  static async addNewProject(ctx?: Context): Promise<ErrorModel|SuccessModel>{
    const projectRepository = getManager().getRepository(Application)
    const projectInfo: ApplicationModel = ctx.request.body
    const newProjectData = projectRepository.create({
        projectName: projectInfo.projectName,
        platform: projectInfo.platform,
        createTime: projectInfo.createTime,
        running: projectInfo.running || false,
        creator: projectInfo.creator
    })
    console.log(newProjectData)
    projectRepository.save(newProjectData)
    return new SuccessModel(null,'添加成功')
  }

  static async getProjectList(ctx?: Context): Promise<ErrorModel | SuccessModel>{
    const projectRepository = getManager().getRepository(Application)
    const projectInfo: Partial<ApplicationModel> = ctx.request.query
    const sqlForm = { 
      projectName: projectInfo.projectName,
      running: !!Number(projectInfo.running),
      creator: projectInfo.creator
    }
    function generatorSql(obj: object,name: string): string {
      return Object.keys(obj).reduce((t,key,currentIndex)=>{
        return `${t} ${currentIndex>0?'AND':''} ${name}.${key} = :${key}`
      },'')
    }

    const result = await projectRepository
                        .createQueryBuilder("application")
                        .where(generatorSql(projectInfo,'application'),sqlForm)
                        // .andWhere('application.running = :running')
                        // .andWhere('application.creator = :creator')
                        .orderBy("application.id", "DESC")
                        .setParameters(sqlForm)
                        // .setFirstResult(1)
                        // .setMaxResults(10)
                        .getMany()
    console.log('result: ', result);
    

    return new SuccessModel({list:result},'添加成功')
  }
}