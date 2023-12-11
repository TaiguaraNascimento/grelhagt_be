import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { FeriadosModule } from './feriados/feriados.module';
import { FiliaisModule } from './filiais/filiais.module';

@Module({
  imports: [ConfigModule.forRoot(), FeriadosModule, FiliaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
