import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import * as clc from 'cli-color';
// import { HeroRepository } from '../../repository/hero.repository';
import { CreateHeroCommand } from '../impl/create-hero.command';
import { Hero, createHero } from '../../entities/hero.entity';

@CommandHandler(CreateHeroCommand)
export class CreateHeroHandler implements ICommandHandler<CreateHeroCommand> {
  constructor(
    // private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: CreateHeroCommand) {
    console.log(clc.greenBright('CreateHeroCommand...'));
    // const { dto } = command;
    // await this.repository.save(dto);
    let hero: Hero = createHero(command.dto);
    hero = this.publisher.mergeObjectContext(hero);
    hero.commit();
  }
}