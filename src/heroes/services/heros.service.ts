import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateHeroCommand, KillDragonCommand } from '../commands/impl';
import { HeroDto } from '../dtos/hero.dto';
import { Hero } from '../entities/hero.entity';
import { KillDragonDto } from '../interfaces/kill-dragon-dto.interface';
import { GetHeroesQuery, GetHeroQuery } from '../queries/impl';

@Injectable()
export class HeroesService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  public async killDragon(id: string, dto: KillDragonDto) {
    return await this.commandBus.execute(
      new KillDragonCommand(id, dto.dragonId),
    );
  }

  public async findAll(): Promise<Hero[]> {
    return await this.queryBus.execute(new GetHeroesQuery());
  }

  public async findById(id: string): Promise<Hero> {
    return await this.queryBus.execute(new GetHeroQuery(id));
  }

  public async create(dto: HeroDto): Promise<void> {
    await this.commandBus.execute(new CreateHeroCommand(dto));
  }
}
