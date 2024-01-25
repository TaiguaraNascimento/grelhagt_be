import { Module } from '@nestjs/common';
import { DivisoesService } from './divisoes.service';
import { DivisoesController } from './divisoes.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [DivisoesService],
  controllers: [DivisoesController],
  imports: [DatabaseModule],
})
export class DivisoesModule {}
