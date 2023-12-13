import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClassificacoesService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarClassificacao(
    classificacao: Prisma.ClassificacoesDeProjetosCreateInput,
  ) {
    this.databaseService.classificacoesDeProjetos.create({
      data: classificacao,
    });
  }
}
