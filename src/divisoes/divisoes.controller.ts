import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DivisoesService } from './divisoes.service';

@Controller('divisoes')
export class DivisoesController {
  constructor(private readonly divisoesService: DivisoesService) {}

  @Post('novo')
  adicionarDivisao(@Body() divisao: Prisma.DivisoesCreateInput) {
    return this.divisoesService.cadastrarDivisao(divisao);
  }

  @Get()
  listagemDeDivisoes() {
    return this.divisoesService.listagemDivisoes();
  }
}
