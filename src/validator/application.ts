import { ApplicationModel } from 'src/interfaces/application';
import { validator, generatorErrorValidaMsg } from './validate';
import { InsertApplicationModel, UpdateAppInfo } from '../interfaces/application';

const getQuerySchema = {
  type: 'object',
  properties: {
    projectName: {
      type: 'string',
      maxLength: 255,
      minLength: 0,
    },
    // createTime: {
    //   type:"date",
    //   maxLength:255
    // },
    pageSize: {
      type: 'number',
      minimum: 0,
    },
    pageNum: {
      type: 'number',
      minimum: 0,
    },
    // platform:{
    //   type:'string',
    //   enum:['H5' , 'Hybrid' , 'PC']
    // },
    running: {
      type: 'string',
      enum: ['0', '1', ''],
    },
    creator: {
      type: 'string',
      maxLength: 255,
      minLength: 0,
    },
    // creator: string;  // 创建者
  },
  additionalProperties: false, //不允许其他属性
  required: ['pageSize', 'pageNum'],
};
const insertSchema = {
  type: 'object',
  properties: {
    projectName: {
      type: 'string',
      maxLength: 255,
      minLength: 0,
    },
    createTime: {
      type: 'string',
      maxLength: 255,
    },
    platform: {
      type: 'string',
      enum: ['H5', 'Hybrid', 'PC'],
    },
    running: {
      type: 'string',
      enum: ['0', '1'],
    },
    creator: {
      type: 'string',
      maxLength: 255,
      minLength: 0,
    },
  },
  additionalProperties: false,
  required: ['projectName', 'createTime', 'platform', 'running', 'creator'],
};

const updateSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
      minimim: 0,
    },
    projectName: {
      type: 'string',
      maxLength: 255,
      minLength: 0,
    },
    platform: {
      type: 'string',
      enum: ['H5', 'Hybrid', 'PC'],
    },
    running: {
      type: 'string',
      enum: ['0', '1'],
    },
  },
  additionalProperties: false,
  required: ['id'],
};

export function getApplicationListValidator(data: Partial<ApplicationModel>): void | string {
  const valid = validator(getQuerySchema, data);
  if (valid) {
    return generatorErrorValidaMsg(valid, data);
  }
}

export function insertApplicationValidator(data: InsertApplicationModel): void | string {
  const valid = validator(insertSchema, data);
  if (valid) {
    return generatorErrorValidaMsg(valid, data);
  }
}

export function updateApplicationValidator(data: UpdateAppInfo): void | string {
  const valid = validator(updateSchema, data);
  if (valid) {
    return generatorErrorValidaMsg(valid, data);
  }
}
