import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class RelatoriosService {
  constructor(private readonly databaseService: DatabaseService) {}

  async relatoriosPorAno() {
    return;
  }
}
