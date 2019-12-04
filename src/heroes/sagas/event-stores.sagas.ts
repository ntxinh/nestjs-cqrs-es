import { Injectable } from '@nestjs/common';
import { ICommand, Saga, ofType } from '@nestjs/cqrs';
import { getRepository } from 'typeorm';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeroCreatedEvent } from '../events/impl/hero-created-event';
import { Event } from '../entities/event.entity';

@Injectable()
export class EventStoresSagas {
  @Saga()
  eventPublished = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(HeroCreatedEvent),
      map(event => {
        const storedEvent = new Event();
        storedEvent.payload = event;
        storedEvent.aggregateId = event.aggregateId;
        const { constructor } = Object.getPrototypeOf(event);
        storedEvent.className = constructor.name;
        getRepository(Event).save(storedEvent);
        return null;
      }),
    );
  }
}
