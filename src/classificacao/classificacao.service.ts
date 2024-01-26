import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClassificacaoService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarClassificacao(classificacao: Prisma.ClassificacaoCreateInput) {
    return this.databaseService.classificacao.create({
      data: classificacao,
    });
  }

  listarClassificacoes() {
    return this.databaseService.classificacao.findMany({
      orderBy: {
        classificacao: 'asc',
      },
    });
  }
}
