import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonCommand } from '../commands/impl/kill-dragon.command';
import { GetHeroesQuery } from '../queries/impl';
import { KillDragonDto } from '../interfaces/kill-dragon-dto.interface';
import { Hero } from '../models/hero.model';

@Injectable()
export class HeroesService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async killDragon(id: string, dto: KillDragonDto) {
    return await this.commandBus.execute(
      new KillDragonCommand(id, dto.dragonId),
    );
  }

  async findAll(): Promise<Hero[]> {
    return await this.queryBus.execute(new GetHeroesQuery());
  }
}
