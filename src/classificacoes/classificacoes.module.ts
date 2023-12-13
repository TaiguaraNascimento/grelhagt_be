import { Module } from '@nestjs/common';
import { ClassificacoesService } from './classificacoes.service';
import { ClassificacoesController } from './classificacoes.controller';
import { DatabaseModule } from 'src/database/database.modeule';

@Module({
  providers: [ClassificacoesService],
  controllers: [ClassificacoesController],
  imports: [DatabaseModule],
})
export class ClassificacoesModule {}
