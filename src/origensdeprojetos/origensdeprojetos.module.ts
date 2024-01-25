import { Module } from '@nestjs/common';
import { OrigensDeProjetosService } from './origensdeprojetos.service';
import { OrigensDeProjetosController } from './origensdeprojetos.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [OrigensDeProjetosService],
  controllers: [OrigensDeProjetosController],
  imports: [DatabaseModule],
})
export class OrigensDeProjetosModule {}
