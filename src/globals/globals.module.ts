import { Global, Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusOptionsService } from './terminus-options.service';
import { UowService } from './unit-of-work/uow.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
  ],
  providers: [UowService],
  exports: [UowService],
})
export class GlobalsModule {}
