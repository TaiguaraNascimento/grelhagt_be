import { Controller } from '@nestjs/common';
import { Get, Put, Delete, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { IndustriasService } from './industrias.service';

@Controller('industrias')
export class IndustriasController {
  constructor(private readonly industriasService: IndustriasService) {}

  @Post('nova')
  adicionarIndustria(@Body() industria: Prisma.IndustriasCreateInput) {
    return this.industriasService.cadastrarIndustrias(industria);
  }

  @Get()
  listarIndustrias() {
    return this.industriasService.listarIndustrias();
  }
}
