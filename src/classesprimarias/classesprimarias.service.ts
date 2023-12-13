import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClassesPrimariasService {
  constructor(private readonly databaseService: DatabaseService) {}

  async cadastrarClassePrimaria(
    classePrimaria: Prisma.ClassesPrimariasProjetosCreateInput,
  ) {
    return this.databaseService.classesPrimariasProjetos.create({
      data: classePrimaria,
    });
  }

  async listarClassesPrimarias() {
    return this.databaseService.classesPrimariasProjetos.findMany({
      orderBy: {
        classePrimaria: 'asc',
      },
    });
  }
}
