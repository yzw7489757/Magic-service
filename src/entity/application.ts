import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectName: string; //项目名称

  @Column('timestamp')
  createTime: Date; //创建时间

  @Column()
  platform: 'H5' | 'Hybrid' | 'PC';// 项目运行环境

  @Column('boolean')
  running: boolean;  // 服务状态

  @Column()
  creator: string;  // 创建者 
}