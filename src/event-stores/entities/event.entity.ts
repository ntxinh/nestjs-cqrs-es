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
  public id: string;

  @Column()
  public className: string;

  // @Column('json') -> for mysql, postgres
  @Column('simple-json')
  public payload: any;

  @Column()
  public aggregateId: string;

  // All the following properties are to ensure events are not mutated
  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @VersionColumn()
  public version: string;
}
