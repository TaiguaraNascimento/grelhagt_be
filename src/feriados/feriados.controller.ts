import { Controller, Get, Body, Post } from '@nestjs/common';
import { FeriadoService } from './feriados.service';

@Controller('feriados')
export class FeriadosController {
  constructor(private feriadosService: FeriadoService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('tiposdeferiados')
  async criarTipoDeFeriado(@Body() data: TipoDoFeriadoDto) {
    return this.feriadosService.criarTipoDeFeriado(data);
  }
}
