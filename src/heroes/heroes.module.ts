import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { COMMAND_HANDLERS } from './commands/handlers';
import { HeroesGameController } from './controllers/heroes.controller';
import { Hero } from './entities/hero.entity';
import { EVENT_HANDLERS } from './events/handlers';
import { QUERY_HANDLERS } from './queries/handlers';
import { HeroRepository } from './repository/hero.repository';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { HeroesService } from './services/heros.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hero, HeroRepository]), CqrsModule],
  controllers: [HeroesGameController],
  providers: [
    HeroesService,
    ...COMMAND_HANDLERS,
    ...EVENT_HANDLERS,
    ...QUERY_HANDLERS,
    HeroesGameSagas,
  ],
})
export class HeroesGameModule {}
