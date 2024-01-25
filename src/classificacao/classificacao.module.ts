import { Module } from '@nestjs/common';
import { ClassificacaoService } from './classificacao.service';
import { ClassificacaoController } from './classificacao.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ClassificacaoService],
  controllers: [ClassificacaoController],
  imports: [DatabaseModule],
})
export class ClassificacaoModule {}
