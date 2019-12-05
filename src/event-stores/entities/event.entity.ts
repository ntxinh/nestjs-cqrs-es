import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity({name: 'events'})
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  className: string;

  // @Column('json') -> for mysql, postgres
  @Column('simple-json')
  payload: any;

  @Column()
  aggregateId: string;

  // All the following properties are to ensure events are not mutated
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: string;
}
