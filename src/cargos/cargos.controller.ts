import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CargosService } from './cargos.service';

@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Post('novo')
  adicionarNovoCargo(@Body() cargo: Prisma.CargosCreateInput) {
    this.cargosService.adicionarNovoCargo(cargo);
  }
}
