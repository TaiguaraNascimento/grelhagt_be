import { Controller } from '@nestjs/common';
import { Get, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrigensDeProjetosService } from './origensdeprojetos.service';

@Controller('origensdeprojetos')
export class OrigensDeProjetosController {
  constructor(
    private readonly origensDeProjetosService: OrigensDeProjetosService,
  ) {}

  @Post('nova')
  adicionarOrigemDeProjeto(@Body() cargo: Prisma.OrigensDeProjetosCreateInput) {
    return this.origensDeProjetosService.cadastrarOrigemDeProjeto(cargo);
  }

  @Get()
  listagemDeOrigensdeProjetos() {
    return this.origensDeProjetosService.listagemDeOrigensdeProjetos();
  }
}
