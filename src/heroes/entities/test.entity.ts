import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UowEntity } from '../../globals/unit-of-work/uow.entity';

@Entity({ name: 'tests' })
export class Test extends UowEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 500 })
  public name: string;
}
