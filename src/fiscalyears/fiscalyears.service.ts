import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { UpdateFiscalYearsDto } from './fiscalyears.dto';

@Injectable()
export class FiscalYearsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async atualizarFiscalYear(
    id: string,
    dadosAtualizados: UpdateFiscalYearsDto,
  ) {
    return this.databaseService.fiscalYears.update({
      where: { id: id },
      data: dadosAtualizados,
    });
  }

  async cadastrarFiscalYear(data: Prisma.FiscalYearsCreateInput) {
    return this.databaseService.fiscalYears.create({
      data: data,
    });
  }

  async listarFiscalYears() {
    return this.databaseService.fiscalYears.findMany({
      orderBy: {
        dataInicial: 'asc',
      },
    });
  }
}
