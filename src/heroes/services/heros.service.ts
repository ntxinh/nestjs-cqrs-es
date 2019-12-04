import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetHeroesQuery, GetHeroQuery } from '../queries/impl';
import { KillDragonDto } from '../interfaces/kill-dragon-dto.interface';
import { Hero } from '../entities/hero.entity';
import { CreateHeroCommand, KillDragonCommand } from '../commands/impl';
import { HeroDto } from '../dtos/hero.dto';

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

  async findById(id: string): Promise<Hero> {
    return await this.queryBus.execute(new GetHeroQuery(id));
  }

  async create(dto: HeroDto): Promise<void> {
    await this.commandBus.execute(new CreateHeroCommand(dto));
  }
}
