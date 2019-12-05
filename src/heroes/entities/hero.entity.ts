import { AggregateRoot } from '@nestjs/cqrs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { HeroFoundItemEvent, HeroKilledDragonEvent } from '../events/impl';
import { HeroCreatedEvent } from '../events/impl';

@Entity({ name: 'heroes' })
export class Hero extends AggregateRoot {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 500 })
  public name: string;

  public killEnemy(enemyId: string) {
    // logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }

  public addItem(itemId: string) {
    // logic
    this.apply(new HeroFoundItemEvent(this.id, itemId));
  }

  public setData({ name }) {
    this.name = name;
  }

  public createHero() {
    this.apply(new HeroCreatedEvent({ aggregateId: this.id, name: this.name }));
  }
}
