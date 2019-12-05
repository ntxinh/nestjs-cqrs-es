import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Hero } from '../../entities/hero.entity';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroesQuery } from '../impl';

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {
  constructor(private readonly repository: HeroRepository) {}

  public async execute(query: GetHeroesQuery): Promise<Hero[]> {
    console.log(clc.yellowBright('Async GetHeroesQuery...'));
    return await this.repository.findAll();
  }
}
