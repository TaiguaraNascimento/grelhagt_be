import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FeriadoService } from './feriados.service';
import { FeriadosController } from './feriados.controller';

@Module({
  controllers: [FeriadosController],
  providers: [FeriadoService, PrismaService],
})
export class FeriadosModule {}
