import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandHandlers } from './commands/handlers';
import { HeroesGameController } from './controllers/heroes.controller';
import { Hero } from './entities/hero.entity';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { HeroRepository } from './repository/hero.repository';
import { HeroesGameSagas } from './sagas/heroes.sagas';
import { HeroesService } from './services/heros.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hero, HeroRepository]), CqrsModule],
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
