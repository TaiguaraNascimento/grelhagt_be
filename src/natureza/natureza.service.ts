import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class NaturezaService {
  constructor(private readonly databaseService: DatabaseService) {}

  async cadastrarnNatureza(natureza: Prisma.NaturezaCreateInput) {
    return this.databaseService.natureza.create({
      data: natureza,
    });
  }

  async listarNaturezas() {
    return this.databaseService.natureza.findMany({
      orderBy: {
        natureza: 'asc',
      },
    });
  }
}
