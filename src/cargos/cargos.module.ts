import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CargosService } from './cargos.service';
import { CargosController } from './cargos.controller';

@Module({
  imports: [DatabaseModule],
  providers: [CargosService],
  controllers: [CargosController],
})
export class CargosModule {}
