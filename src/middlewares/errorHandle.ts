import { Context, Next } from 'koa';
import { ErrorModel } from '../utils/Response';

const errorHandle = (ctx: Context, next: Next): Promise<ErrorModel | never> => {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = new ErrorModel({
        error: err.originalError ? err.originalError.message : err.message,
        message: '权限验证失败，请登录',
      });
    } else {
      throw err;
    }
  });
};

export default errorHandle;
