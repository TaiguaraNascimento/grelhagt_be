import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClassesSecundariasService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarClasseSecundaria(
    classeSecundaria: Prisma.ClasseSecundariaProjetosCreateInput,
  ) {
    this.databaseService.classeSecundariaProjetos.create({
      data: classeSecundaria,
    });
  }
}
