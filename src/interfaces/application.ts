export interface ApplicationModel {
  id: number;
  projectName: string; //项目名称
  createTime: Date; //创建时间
  platform: 'H5' | 'Hybrid' | 'PC'; // 项目运行环境
  running?: '0' | '1'; // 服务状态
  creator: string; // 创建者
}

export interface InsertApplicationModel {
  projectName: string; //项目名称
  createTime: Date; //创建时间
  platform: 'H5' | 'Hybrid' | 'PC'; // 项目运行环境
  running: '0' | '1'; // 服务状态
  creator: string; // 创建者
}

export interface UpdateAppInfo extends Partial<Omit<InsertApplicationModel, 'creator' | 'createTime'>> {
  id: number;
}

type MyPick<T, U extends keyof T> = {
  [P in U]: T[P];
};

type MyExclude<T, U extends T> = T extends U ? never : T;

type MyOmit<T, U extends keyof T> = MyPick<T, MyExclude<keyof T, U>>;

// type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
// (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type bbb = UnionToIntersection<string | number>;
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type Result = UnionToIntersection<string | number>;
type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void } ? U : never;
type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>;
