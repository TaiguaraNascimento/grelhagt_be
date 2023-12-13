import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PropostasService {
  constructor(private readonly databaseService: DatabaseService) {}

  async cadastrarPropostas(propostas: Prisma.PropostasCreateInput) {
    return this.databaseService.propostas.create({
      data: propostas,
    });
  }

  async listarPropostasCadastradas() {
    return this.databaseService.propostas.findMany();
  }
}
