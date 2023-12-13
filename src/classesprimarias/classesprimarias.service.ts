import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClassesPrimariasService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarClassePrimaria(
    classePrimaria: Prisma.ClassesPrimariasProjetosCreateInput,
  ) {
    this.databaseService.classesPrimariasProjetos.create({
      data: classePrimaria,
    });
  }
}
