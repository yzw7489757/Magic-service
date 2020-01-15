export interface ProjectModel{
  id: number;
  projectName: string; //项目名称
  createTime: Date; //创建时间
  platform: 'H5' | 'Hybrid' | 'PC' | 'all';// 项目运行环境
  running: boolean;  // 服务状态
  creator: string;  // 创建者 
}