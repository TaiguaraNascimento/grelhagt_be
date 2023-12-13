import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FiscalYearsService {
  constructor(private readonly databaseService: DatabaseService) {}

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
