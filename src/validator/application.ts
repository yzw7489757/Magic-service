import { ApplicationModel } from "src/interfaces/application"
import validator from "./validate"
import * as Ajv from 'ajv';

const schema = {
  type: 'object',
  properties: {
    projectName: {
      type: 'string',
      maxLength: 255,
      minLength: 0
    },
    // createTime: {
    //   type:"date",
    //   maxLength:255
    // },
    pageSize: {
      type: 'number',
      minimum: 0
    },
    pageNum: {
      type: 'number',
      minimum: 0
    },
    // platform:{
    //   type:'string',
    //   enum:['H5' , 'Hybrid' , 'PC']
    // },
    running: {
      type: 'string',
      enum: ['0', '1']
    },
    creator: {
      type: 'string',
      maxLength: 255,
      minLength: 0
    }
    // creator: string;  // 创建者 
  },
  additionalProperties: true, //不允许其他属性
  required: ["pageSize", "pageNum"]
}

function validatorApplication(data: Partial<ApplicationModel>): void | Ajv.ErrorObject {
  return validator(schema, data)
}

export default validatorApplication