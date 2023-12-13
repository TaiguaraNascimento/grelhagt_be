import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PropostasService } from './propostas.service';

@Controller('propostas')
export class PropostasController {
  constructor(private readonly propostasService: PropostasService) {}

  @Post('nova')
  adicionarNovoCargo(@Body() proposta: Prisma.PropostasCreateInput) {
    this.propostasService.cadastrarPropostas(proposta);
  }
}
