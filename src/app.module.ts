import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { FeriadosController } from './feriados/feriados.controller';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { FeriadoService } from './feriados/feriados.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), AdministrativoModule],
  controllers: [AppController, FeriadosController],
  providers: [AppService, FeriadoService, PrismaService],
})
export class AppModule {}
