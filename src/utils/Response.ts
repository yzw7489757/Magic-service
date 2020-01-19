type SuccessCode = 200;
type ErrorCode = 1001;

abstract class BaseModel {
  public message?: string;
  public error?: string;
  public data?: any;

  constructor({ error = null, data = null, message = '' }) {
    this.error = error;
    if (data !== 'undefined') {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

/**
 * 成功数据模型
 *
 * @export
 * @class SuccessModel
 * @extends {BaseModel}
 */
export class SuccessModel extends BaseModel {
  public code: SuccessCode;

  constructor(data: any, message = '操作成功') {
    super({
      error: false,
      data: data,
      message,
    });
    this.code = 200;
  }
}
/**
 * 失败数据模式
 *
 * @export
 * @class ErrorModel
 * @extends {BaseModel}
 */
export class ErrorModel extends BaseModel {
  public code: ErrorCode;
  constructor({ data = null, error, message = '操作失败' }) {
    super({
      error: error,
      data,
      message,
    });
    this.code = 1001;
  }
}
