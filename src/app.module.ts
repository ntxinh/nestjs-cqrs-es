import { Module } from '@nestjs/common';
import { EventStoresModule } from './event-stores/event-stores.module';
import { GlobalsModule } from './globals/globals.module';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [
    GlobalsModule,
    EventStoresModule,
    HeroesGameModule,
  ],
})
export class AppModule {}
