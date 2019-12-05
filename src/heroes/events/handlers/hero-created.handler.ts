import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { HeroCreatedEvent } from '../impl';

@EventsHandler(HeroCreatedEvent)
export class HeroCreatedHandler implements IEventHandler<HeroCreatedEvent> {
  public handle(event: HeroCreatedEvent) {
    console.log(clc.greenBright('HeroCreatedEvent...'));
  }
}
