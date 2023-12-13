import { Controller } from '@nestjs/common';
import { Post, Get, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ClassesPrimariasService } from './classesprimarias.service';

@Controller('classesprimarias')
export class ClassesPrimariasController {
  constructor(private readonly classeService: ClassesPrimariasService) {}

  @Post('nova')
  cadastarNovaClasse(
    @Body() classe: Prisma.ClassesPrimariasProjetosCreateInput,
  ) {
    return this.classeService.cadastrarClassePrimaria(classe);
  }

  @Get()
  listarClassesPrimarias() {
    return this.classeService.listarClassesPrimarias();
  }
}
