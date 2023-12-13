import { Controller } from '@nestjs/common';
import { Put, Delete, Post, Get, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClassesSecundariasService } from './classessecundarias.service';

@Controller('classessecundarias')
export class ClassesSecundariasController {
  constructor(private readonly classeService: ClassesSecundariasService) {}

  @Post('nova')
  cadastarNovaClasse(
    @Body() classe: Prisma.ClassesSecundariasProjetosCreateInput,
  ) {
    this.classeService.cadastrarClasseSecundaria(classe);
  }

  @Get()
  listagemClasseSecundaria() {
    return this.classeService.listagemClasseSecundaria();
  }
}
