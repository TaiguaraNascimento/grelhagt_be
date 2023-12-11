import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
<<<<<<< HEAD
import { FeriadosController } from './feriados/feriados.controller';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { FeriadoService } from './feriados/feriados.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), AdministrativoModule],
  controllers: [AppController, FeriadosController],
  providers: [AppService, FeriadoService, PrismaService],
=======
import { FileuploaderController } from './fileuploader/fileuploader.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, FileuploaderController],
  providers: [AppService],
>>>>>>> bd52bf1253dedc1d12e106a3b89e85db6c3c01c0
})
export class AppModule {}
