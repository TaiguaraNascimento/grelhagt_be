import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class CargosService {
  constructor(private readonly databaseService: DatabaseService) {}

  async adicionarNovoCargo(cargo: Prisma.CargosCreateInput) {
    return this.databaseService.cargos.create({
      data: cargo,
    });
  }

  async listarCargos() {
    return this.databaseService.cargos.findMany({
      orderBy: {
        graduacao: 'desc',
      },
    });
  }

  async atualizarCargo(id: string, cargo: Prisma.CargosUpdateInput) {
    return this.databaseService.cargos.update({
      where: {
        id,
      },
      data: cargo,
    });
  }
}
