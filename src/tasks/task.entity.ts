import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';


@Entity()
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
     
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
    // user: import("c:/Users/engbe/OneDrive/Documents/developments/task-manager/src/auth/user.entity").User;

    @ManyToMany(type => User, user => user.tasks, { eager: false })
    user: User;

}