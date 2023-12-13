import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class CargosService {
  constructor(private readonly databaseService: DatabaseService) {}

  adicionarNovoCargo(cargo: Prisma.CargosCreateInput) {
    this.databaseService.cargos.create({
      data: cargo,
    });
  }
}
