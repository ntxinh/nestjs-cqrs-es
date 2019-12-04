import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventStoresSagas } from '../event-stores/sagas/event-stores.sagas';
import { Event } from './entities/event.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    CqrsModule
  ],
  providers: [
    EventStoresSagas,
  ],
})
export class EventStoresModule {}