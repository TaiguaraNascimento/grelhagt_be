import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ClientesService],
  controllers: [ClientesController],
  imports: [DatabaseModule],
})
export class ClientesModule {}
