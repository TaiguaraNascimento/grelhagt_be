import { Controller } from '@nestjs/common';
import { Get, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PropostasService } from './propostas.service';

@Controller('propostas')
export class PropostasController {
  constructor(private readonly propostasService: PropostasService) {}

  @Post('nova')
  adicionarNovoCargo(@Body() proposta: Prisma.PropostasCreateInput) {
    return this.propostasService.cadastrarPropostas(proposta);
  }

  @Get()
  listarPropostasCadastradas() {
    return this.propostasService.listarPropostasCadastradas();
  }
}
