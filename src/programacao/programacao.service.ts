import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProgramacaoService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarProgramacao(programacao: Prisma.ProgramacaoCreateInput) {
    this.databaseService.programacao.create({
      data: programacao,
    });
  }
}
