import { Controller } from '@nestjs/common';
import { Put, Delete, Post, Get, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClassesPrimariasService } from './classesprimarias.service';

@Controller('classesprimarias')
export class ClassesPrimariasController {
  constructor(private readonly classeService: ClassesPrimariasService) {}

  @Post('nova')
  cadastarNovaClasse(
    @Body() classe: Prisma.ClassesPrimariasProjetosCreateInput,
  ) {
    this.classeService.cadastrarClassePrimaria(classe);
  }
}
