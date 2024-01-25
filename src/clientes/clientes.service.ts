import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async cadastrarClientes(clientes: Prisma.ClientesCreateInput) {
    return this.databaseService.clientes.create({
      data: clientes,
    });
  }

  async listagemDeClientes() {
    return this.databaseService.clientes.findMany({
      orderBy: {
        nomeDoCliente: 'asc',
      },
    });
  }

  async exibirCliente(id: string): Promise<any> {
    return this.databaseService.clientes.findUnique({
      where: {
        id: id,
      },
    });
  }
}
