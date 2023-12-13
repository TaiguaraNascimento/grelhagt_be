import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { DatabaseModule } from 'src/database/database.modeule';

@Module({
  providers: [ClientesService],
  controllers: [ClientesController],
  imports: [DatabaseModule],
})
export class ClientesModule {}
