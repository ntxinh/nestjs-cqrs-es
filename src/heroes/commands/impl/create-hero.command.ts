import { HeroDto } from '../../dtos/hero.dto';

export class CreateHeroCommand {
  constructor(public readonly dto: HeroDto) {}
}
