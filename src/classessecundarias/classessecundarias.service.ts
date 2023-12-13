import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClassesSecundariasService {
  constructor(private readonly databaseService: DatabaseService) {}

  async cadastrarClasseSecundaria(
    classeSecundaria: Prisma.ClassesSecundariasProjetosCreateInput,
  ) {
    return this.databaseService.classesSecundariasProjetos.create({
      data: classeSecundaria,
    });
  }

  async listagemClasseSecundaria() {
    return this.databaseService.classesSecundariasProjetos.findMany();
  }
}
