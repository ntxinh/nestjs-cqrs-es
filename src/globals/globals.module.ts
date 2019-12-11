import { Global, Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusOptionsService } from './terminus-options.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
  ],
})
export class GlobalsModule {}
