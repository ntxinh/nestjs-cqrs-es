import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroQuery } from '../impl';

@QueryHandler(GetHeroQuery)
export class GetHeroHandler implements IQueryHandler<GetHeroQuery> {
  constructor(private readonly repository: HeroRepository) {}

  async execute(query: GetHeroQuery) {
    console.log(clc.yellowBright('Async GetHeroQuery...'));
    const { id } = query;
    return await this.repository.findById(id);
  }
}
