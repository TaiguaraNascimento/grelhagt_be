import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProgramacaoService } from './programacao.service';

@Controller('programacao')
export class ProgramacaoController {
  constructor(private readonly programacaoService: ProgramacaoService) {}

  @Post('nova')
  adicionarProgramacao(@Body() programacao: Prisma.ProgramacaoCreateInput) {
    this.programacaoService.cadastrarProgramacao(programacao);
  }
}
