import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientesService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarClientes(clientes: Prisma.ClientesCreateInput) {
    this.databaseService.clientes.create({
      data: clientes,
    });
  }
}
