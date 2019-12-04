import { HeroKilledDragonHandler } from './hero-killed-dragon.handler';
import { HeroFoundItemHandler } from './hero-found-item.handler';
import { HeroCreatedHandler } from './hero-created.handler';

export const EventHandlers = [
    HeroKilledDragonHandler,
    HeroFoundItemHandler,
    HeroCreatedHandler
];