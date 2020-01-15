import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class RegisteredUser {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  nickName:string;

  @Column()
  phone: string;

  @Column()
  department: string
}