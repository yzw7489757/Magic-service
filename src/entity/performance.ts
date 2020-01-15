import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Performance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectId: number;

  @Column("simple-array")
  record: string[];

  @Column()
  createTime: string;

  @Column()
  platform: string;

  @Column()
  broswerVersion: string;

  @Column()
  phoneModel: string;

  @Column()
  network: string; // 网络

  @Column("enum", { enum: ["A", "B", "C"] })
  score:string; //评分
}