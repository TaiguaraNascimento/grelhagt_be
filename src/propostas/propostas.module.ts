import { Module } from '@nestjs/common';
import { PropostasService } from './propostas.service';
import { PropostasController } from './propostas.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [PropostasService],
  controllers: [PropostasController],
  imports: [DatabaseModule],
})
export class PropostasModule {}
