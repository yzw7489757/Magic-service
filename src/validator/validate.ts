import * as Ajv from 'ajv';
import { Validator } from '../interfaces/validator';

const ajv = new Ajv({
  // allErrors:true,
})
/**
 * 校验数据
 *
 * @export validator
 * @param {*} schema JSON Schema 规则
 * @param {*} [data={}] 校验数据源
 */
function validator(schema: Validator, data = {}): void | import('ajv').ErrorObject {
  const valid = ajv.validate(schema, data)

  if (!valid) {
    return ajv.errors[0]
  }
}

export default validator

