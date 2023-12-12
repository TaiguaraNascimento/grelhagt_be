import { Controller, Get, Body, Post } from '@nestjs/common';
import { TipoDeFeriadoService } from './tipodeferiado.service';
import { Prisma } from '@prisma/client';

@Controller('tiposdeferiados')
export class TipoDeFeriadoController {
  constructor(private tipoDeFeriadoService: TipoDeFeriadoService) {}

  @Post('novo')
  async criarTipoDeFeriado(@Body() data: Prisma.TipoDeFeriadoCreateInput) {
    return this.tipoDeFeriadoService.criarTipoDeFeriado(data);
  }

  @Get()
  async listarTiposDeFeriados() {
    return this.tipoDeFeriadoService.listarTiposDeFeriadosCadastrados();
  }
}
