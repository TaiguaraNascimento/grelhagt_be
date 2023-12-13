import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PropostasService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarPropostas(propostas: Prisma.PropostasCreateInput) {
    this.databaseService.propostas.create({
      data: propostas,
    });
  }
}
