import { Module } from '@nestjs/common';
import { ProfissionaisService } from './profissionais.service';
import { ProfissionaisController } from './profissionais.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ProfissionaisService],
  controllers: [ProfissionaisController],
  imports: [DatabaseModule],
})
export class ProfissionaisModule {}
