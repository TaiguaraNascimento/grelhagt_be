import { Controller } from '@nestjs/common';
import { Body, Post, Get } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClassificacaoService } from './classificacao.service';

@Controller('classificacao')
export class ClassificacaoController {
  constructor(private readonly classificacaoService: ClassificacaoService) {}

  @Post('nova')
  adicionarClassificacao(
    @Body() classificacao: Prisma.ClassificacaoCreateInput,
  ) {
    return this.classificacaoService.cadastrarClassificacao(classificacao);
  }

  @Get()
  listarClassificacoes() {
    return this.classificacaoService.listarClassificacoes();
  }
}
