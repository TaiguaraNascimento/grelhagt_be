import { Module } from '@nestjs/common';
import { FeriadoService } from './feriados.service';
import { FeriadosController } from './feriados.controller';
import { DatabaseModule } from 'src/database/database.modeule';

@Module({
  imports: [DatabaseModule],
  controllers: [FeriadosController],
  providers: [FeriadoService],
})
export class FeriadosModule {}
