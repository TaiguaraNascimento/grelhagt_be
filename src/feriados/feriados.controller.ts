import { Controller, Get, Body, Post } from '@nestjs/common';
import { FeriadoService } from './feriados.service';
import { Prisma } from '@prisma/client';

@Controller('feriados')
export class FeriadosController {
  constructor(private feriadosService: FeriadoService) {}

  @Get()
  listarFeriadosCadastrados() {
    return this.feriadosService.listarFeriadosCadastrados();
  }

  @Post('novo')
  cadastrarFeriado(@Body() data: Prisma.FeriadosCreateInput) {
    data.dataDoFeriado = new Date(data.dataDoFeriado).toISOString();
    return this.feriadosService.cadastrarFeriado(data);
  }
}
