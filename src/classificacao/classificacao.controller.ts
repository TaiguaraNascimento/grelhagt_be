import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClassificacaoService } from './classificacao.service';

@Controller('classificacoes')
export class ClassificacaoController {
  constructor(private readonly classificacoesService: ClassificacaoService) {}

  @Post('novo')
  adicionarClassificacao(
    @Body() classificacao: Prisma.ClassificacaoCreateInput,
  ) {
    this.classificacoesService.cadastrarClassificacao(classificacao);
  }
}
