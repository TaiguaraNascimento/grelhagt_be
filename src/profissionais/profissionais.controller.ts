import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProfissionaisService } from './profissionais.service';

@Controller('profissionais')
export class ProfissionaisController {
  constructor(private readonly profissionaisService: ProfissionaisService) {}

  @Post('novo')
  adicionarNovoProfissional(@Body() profissional: Prisma.CargosCreateInput) {
    this.profissionaisService.cadastrarProfissionais(profissional);
  }
}
