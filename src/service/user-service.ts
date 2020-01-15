import { Context } from 'koa';
import { getManager } from 'typeorm';
import RegisteredUser from '../entity/RegisteredUser';
import { ILogin } from '../interfaces/user';
import { SuccessModel, ErrorModel } from '../utils/Response';
import encryptionPw from '../utils/cryp';
import { getToken } from '../utils/Token';


export default class UserService {
  /**
   * 注册用户
   * @static 
   * @param {Context} [context]
   * @returns 操作结果
   * @memberof UserService
   */
  static async register(context?:Context){
    const registerRepository = getManager().getRepository(RegisteredUser);
    const registerData: RegisteredUser = context.request.body;

    const result = await registerRepository.findOne({
      userName: registerData.userName
    })
    if(result) {
      return new ErrorModel({
        error: '账户已存在'
      })
    }
    try{
      const newUser = registerRepository.create({
        nickName:registerData.nickName,
        userName:registerData.userName,
        password:encryptionPw(registerData.password),
        department:registerData.department,
        phone: registerData.phone
      })
      
      await registerRepository.save(newUser);
      return new SuccessModel(null,'注册成功')
    }catch(e) {
      return new ErrorModel({
        error: e
      })
    }
    
  }
/**
 * 登录
 *
 * @static
 * @param {Context} [context]
 * @memberof UserService
 */
static async login(context?:Context){
    const registerRepository = getManager().getRepository(RegisteredUser);
    const registerData:ILogin  = context.request.body;
    
    const result = await registerRepository.findOne({
      userName: registerData.userName
    })

    if(!result){
      return new ErrorModel({
        error: '未找到该用户，请核对账号'
      })
    }
    if(result.password !== encryptionPw(registerData.password)){
      return new ErrorModel({
        error:'密码错误'
      })
    }
    return new SuccessModel({
      token:getToken({userName:registerData.userName, password:registerData.password}),
      nickName: result.nickName,
      phone: result.phone,
      department: result.department,
      userName: result.userName
    },'登录成功')
  }
}