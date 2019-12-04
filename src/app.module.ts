import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    HeroesGameModule
  ],
})
export class AppModule {}