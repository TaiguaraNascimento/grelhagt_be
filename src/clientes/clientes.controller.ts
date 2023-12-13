import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post('novo')
  adicionarCliente(@Body() cargo: Prisma.ClientesCreateInput) {
    this.clientesService.cadastrarClientes(cargo);
  }
}
