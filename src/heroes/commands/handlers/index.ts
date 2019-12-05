import { CreateHeroHandler } from './create-hero.handler';
import { DropAncientItemHandler } from './drop-ancient-item.handler';
import { KillDragonHandler } from './kill-dragon.handler';

export const COMMAND_HANDLERS = [
  KillDragonHandler,
  DropAncientItemHandler,
  CreateHeroHandler,
];
