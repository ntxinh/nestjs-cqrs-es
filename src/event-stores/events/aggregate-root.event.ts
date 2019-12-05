import { IEvent } from '@nestjs/cqrs';

export class AggregateRootEvent implements IEvent {
  public aggregateId: string;
  public name: string;

  constructor(payload: { aggregateId: string; name: string }) {
    this.aggregateId = payload.aggregateId;
    this.name = payload.name;
  }
}
