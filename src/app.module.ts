import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'sa',
        password: '123',
        database: 'boilerplate_development',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
      }
    ),
    HeroesGameModule
  ],
})
export class AppModule {}