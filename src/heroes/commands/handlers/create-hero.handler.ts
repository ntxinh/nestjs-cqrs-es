import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { CreateHeroCommand } from '../impl/create-hero.command';

@CommandHandler(CreateHeroCommand)
export class CreateHeroHandler implements ICommandHandler<CreateHeroCommand> {
  constructor(
    private readonly repository: HeroRepository,
  ) {}

  async execute(command: CreateHeroCommand) {
    console.log(clc.greenBright('CreateHeroCommand...'));
    const { dto } = command;
    await this.repository.save(dto);
  }
}