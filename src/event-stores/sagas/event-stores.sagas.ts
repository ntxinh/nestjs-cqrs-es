import { Injectable } from '@nestjs/common';
import { ICommand, Saga, ofType } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { getRepository } from 'typeorm';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../entities/event.entity';
import { AggregateRootEvent } from '../events/aggregate-root.event';

@Injectable()
export class EventStoresSagas {
  @Saga()
  eventPublished = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(AggregateRootEvent),
      map(event => {
        console.log(clc.redBright('Inside [EventStoresSagas] Saga'));
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
