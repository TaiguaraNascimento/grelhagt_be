import { Module } from '@nestjs/common';
import { EventosPadraoService } from './eventospadrao.service';
import { EventosPadraoController } from './eventospadrao.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [EventosPadraoService],
  controllers: [EventosPadraoController],
  imports: [DatabaseModule],
})
export class EventosPadraoModule {}
