import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventStoresModule } from './event-stores/event-stores.module';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EventStoresModule, HeroesGameModule],
})
export class AppModule {}
