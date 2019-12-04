import { IEvent } from '@nestjs/cqrs';

export class AggregateRootEvent implements IEvent {
  constructor(payload: { aggregateId: string; name: string }) {
    this.aggregateId = payload.aggregateId;
    this.name = payload.name;
  }
  aggregateId: string;
  name: string;
}
