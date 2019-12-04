import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesGameModule } from './heroes/heroes.module';
import { EventStoresModule } from './event-stores/event-stores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    EventStoresModule,
    HeroesGameModule,
  ],
})
export class AppModule {}