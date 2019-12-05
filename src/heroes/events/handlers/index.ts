import { HeroCreatedHandler } from './hero-created.handler';
import { HeroFoundItemHandler } from './hero-found-item.handler';
import { HeroKilledDragonHandler } from './hero-killed-dragon.handler';

export const EVENT_HANDLERS = [
  HeroKilledDragonHandler,
  HeroFoundItemHandler,
  HeroCreatedHandler,
];
