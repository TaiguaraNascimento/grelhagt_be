import { Module } from '@nestjs/common';
import { ProgramacaoService } from './programacao.service';
import { ProgramacaoController } from './programacao.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ProgramacaoService],
  controllers: [ProgramacaoController],
  imports: [DatabaseModule],
})
export class ProgramacaoModule {}
