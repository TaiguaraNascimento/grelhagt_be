import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FiscalYearsService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarFiscalYear(fiscalYears: Prisma.FiscalYearsCreateInput) {
    this.databaseService.fiscalYears.create({
      data: fiscalYears,
    });
  }
}
