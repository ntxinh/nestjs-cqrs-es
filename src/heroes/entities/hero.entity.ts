import { AggregateRoot } from '@nestjs/cqrs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuidv4 from 'uuid/v4';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';
import { HeroCreatedEvent } from '../events/impl/hero-created-event';

export const createHero = ({ name }) => {
  const newHero = new Hero();
  const heroCreatedEvent = new HeroCreatedEvent({ aggregateId: uuidv4(), name });
  newHero.apply(heroCreatedEvent);
  return newHero;
};

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

  onHeroCreated(event: HeroCreatedEvent) {
    this.id = event.aggregateId;
    this.name = event.name;
  }
}