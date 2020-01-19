import { Context } from 'koa';
import { getManager } from 'typeorm';
import Performance from '../entity/performance';
import { SuccessModel, ErrorModel } from '../utils/Response';
import { PerformanceDbRecord } from '../interfaces/performance';

export default class PerformanceService {
  static async insert(context?: Context): Promise<SuccessModel | ErrorModel> {
    const performanceRepository = getManager().getRepository(Performance);
    const recordData: PerformanceDbRecord = context.request.body;

    const newCategory = performanceRepository.create({
      projectId: recordData.projectId,
      record: recordData.record,
      createTime: recordData.createTime,
      platform: recordData.platform,
      broswerVersion: recordData.broswerVersion,
      phoneModel: recordData.phoneModel,
      network: recordData.network, // 网络
      score: recordData.score, //评分
    });

    await performanceRepository.save(newCategory);
    return new SuccessModel(null, '添加成功');
  }

  static async list(context?: Context): Promise<SuccessModel | ErrorModel> {
    const performanceRepository = getManager().getRepository(Performance);
    const recordData: PerformanceDbRecord = context.request.body;
    const [result = [], count] = await performanceRepository.findAndCount();

    // result.forEach(item=>{
    //   item.record.forEach(JSON.parse())
    // })
    return new SuccessModel({
      list: result,
      count,
    });
  }
}
