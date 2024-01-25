import { Controller } from '@nestjs/common';
import { Get, Body, Post, Patch, Param } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FiscalYearsService } from './fiscalyears.service';
import Utilidades from 'backend/utils/Utilidades';
import { UpdateFiscalYearsDto } from './fiscalyears.dto';

@Controller('fiscalyears')
export class FiscalYearsController {
  constructor(private readonly fiscalyearsService: FiscalYearsService) {}

  @Post('novo')
  adicionarFiscalYear(@Body() fiscalYear: Prisma.FiscalYearsCreateInput) {
    // Correção das datas
    fiscalYear.dataInicial = Utilidades.DateFromString(
      fiscalYear.dataInicial.toString(),
    );
    fiscalYear.dataFinal = Utilidades.DateFromString(
      fiscalYear.dataFinal.toString(),
    );
    // Executa a ação

    return this.fiscalyearsService.cadastrarFiscalYear(fiscalYear);
  }

  @Get()
  listarFiscalYears() {
    return this.fiscalyearsService.listarFiscalYears();
  }

  @Patch('atualizar/:id')
  atualizarFiscalYear(
    @Param('id') id,
    @Body() fiscalYear: UpdateFiscalYearsDto,
  ) {
    return this.fiscalyearsService.atualizarFiscalYear(id, fiscalYear);
  }
}
