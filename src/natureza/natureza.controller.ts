import { Controller } from '@nestjs/common';
import { Post, Get, Body } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { NaturezaModule } from './natureza.module';
import { NaturezaService } from './natureza.service';

@Controller('classesprimarias')
export class NaturezaController {
  constructor(private readonly naturezaService: NaturezaService) {}

  @Post('nova')
  cadastarNovaClasse(@Body() classe: Prisma.NaturezaCreateInput) {
    return this.naturezaService.cadastrarnNatureza(classe);
  }

  @Get()
  listarClassesPrimarias() {
    return this.naturezaService.listarNaturezas();
  }
}
