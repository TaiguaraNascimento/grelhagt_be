import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EventosPadraoService } from './eventospadrao.service';

@Controller('eventospadrao')
export class EventosPadraoController {
  constructor(private readonly eventosPadraoService: EventosPadraoService) {}

  @Post('novo')
  adicionarNovoCargo(
    @Body() eventoPadrao: Prisma.TipoDeEventosPadraoCreateInput,
  ) {
    this.eventosPadraoService.cadastrarTipoDeEventoPadrao(eventoPadrao);
  }
}
