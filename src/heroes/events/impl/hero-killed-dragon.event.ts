export class HeroKilledDragonEvent {
    constructor(
      public readonly heroId: number,
      public readonly dragonId: string,
    ) {}
}