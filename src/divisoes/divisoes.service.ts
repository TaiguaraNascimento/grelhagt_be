import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DivisoesService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarDivisao(divisao: Prisma.DivisoesCreateInput) {
    this.databaseService.divisoes.create({
      data: divisao,
    });
  }
}
