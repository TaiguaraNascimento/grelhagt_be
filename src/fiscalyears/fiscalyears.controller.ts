import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FiscalYearsService } from './fiscalyears.service';

@Controller('fiscalyears')
export class FiscalYearsController {
  constructor(private readonly fiscalyearsService: FiscalYearsService) {}

  @Post('novo')
  adicionarFiscalYear(@Body() fiscalYear: Prisma.FiscalYearsCreateInput) {
    this.fiscalyearsService.cadastrarFiscalYear(fiscalYear);
  }
}
