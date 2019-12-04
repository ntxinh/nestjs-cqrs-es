import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { CreateHeroCommand } from '../impl';

@CommandHandler(CreateHeroCommand)
export class CreateHeroHandler implements ICommandHandler<CreateHeroCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: CreateHeroCommand) {
    console.log(clc.greenBright('CreateHeroCommand...'));

    const { dto } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.createHero(dto),
    );
    hero.commit();
  }
}