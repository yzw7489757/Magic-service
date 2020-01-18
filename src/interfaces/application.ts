export interface ApplicationModel{
  id: number;
  projectName: string; //项目名称
  createTime: Date; //创建时间
  platform: 'H5' | 'Hybrid' | 'PC';// 项目运行环境
  running?: '0' | '1';  // 服务状态
  creator: string;  // 创建者 
}

export interface InsertApplicationModel{
  projectName: string; //项目名称
  createTime: Date; //创建时间
  platform: 'H5' | 'Hybrid' | 'PC';// 项目运行环境
  running: '0' | '1';  // 服务状态
  creator: string;  // 创建者 
}