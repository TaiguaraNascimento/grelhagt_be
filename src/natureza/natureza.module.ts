import { Module } from '@nestjs/common';
import { NaturezaService } from './natureza.service';
import { NaturezaController } from './natureza.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [NaturezaService],
  controllers: [NaturezaController],
  imports: [DatabaseModule],
})
export class NaturezaModule {}
