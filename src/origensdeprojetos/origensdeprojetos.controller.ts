import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrigensDeProjetosService } from './origensdeprojetos.service';

@Controller('origensdeprojetos')
export class OrigensDeProjetosController {
  constructor(
    private readonly origensDeProjetosService: OrigensDeProjetosService,
  ) {}

  @Post('novo')
  adicionarOrigemDeProjeto(@Body() cargo: Prisma.OrigensDeProjetosCreateInput) {
    this.origensDeProjetosService.cadastrarOrigemDeProjeto(cargo);
  }
}
