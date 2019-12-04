import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { HeroesGameController } from './controllers/heroes.controller';
import { QueryHandlers } from './queries/handlers';
import { HeroRepository } from './repository/hero.repository';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { HeroesService } from './services/heros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './entities/hero.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hero, HeroRepository]),
    CqrsModule
  ],
  controllers: [HeroesGameController],
  providers: [
    HeroesService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,
  ],
})
export class HeroesGameModule {}