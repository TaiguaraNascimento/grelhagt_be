import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClassificacoesService } from './classificacoes.service';

@Controller('classificacoes')
export class ClassificacoesController {
  constructor(private readonly classificacoesService: ClassificacoesService) {}

  @Post('novo')
  adicionarClassificacao(
    @Body() classificacao: Prisma.ClassificacoesDeProjetosCreateInput,
  ) {
    this.classificacoesService.cadastrarClassificacao(classificacao);
  }
}
