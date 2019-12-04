import { AggregateRoot } from '@nestjs/cqrs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { HeroFoundItemEvent, HeroKilledDragonEvent } from '../events/impl';
import { HeroCreatedEvent } from '../events/impl';

@Entity({name: 'heroes'})
export class Hero extends AggregateRoot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  killEnemy(enemyId: string) {
    // logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }

  addItem(itemId: string) {
    // logic
    this.apply(new HeroFoundItemEvent(this.id, itemId));
  }

  setData({ name }) {
    this.name = name;
  }

  createHero() {
    this.apply(new HeroCreatedEvent({ aggregateId: this.id, name: this.name }));
  }
}