import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventStoresModule } from './event-stores/event-stores.module';
import { HeroesGameModule } from './heroes/heroes.module';
import { TerminusOptionsService } from './terminus-options.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
    EventStoresModule,
    HeroesGameModule],
})
export class AppModule {}
