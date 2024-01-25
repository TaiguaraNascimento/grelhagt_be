import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DivisoesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async cadastrarDivisao(divisao: Prisma.DivisoesCreateInput) {
    return this.databaseService.divisoes.create({
      data: divisao,
    });
  }

  async listagemDivisoes() {
    return this.databaseService.divisoes.findMany({
      orderBy: {
        divisoes: 'asc',
      },
    });
  }
}
