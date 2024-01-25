import { Controller, Get } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';

import { Prisma } from '@prisma/client';

@Controller('relatorios')
export class FeriadoController {
  constructor(private relatoriosService: RelatoriosService) {}

  @Get('feriados/por_ano')
  feriadosPorAno() {
    return 'oi';
  }
}
