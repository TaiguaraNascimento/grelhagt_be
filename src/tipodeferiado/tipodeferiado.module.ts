import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.modeule';
import { TipoDeFeriadoService } from './tipodeferiado.service';
import { TipoDeFeriadoController } from './tipodeferiado.controller';

@Module({
  imports: [DatabaseModule],
  providers: [TipoDeFeriadoService],
  controllers: [TipoDeFeriadoController],
})
export class TipoDeFeriadoModule {}
