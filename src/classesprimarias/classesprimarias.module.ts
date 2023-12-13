import { Module } from '@nestjs/common';
import { ClassesPrimariasService } from './classesprimarias.service';
import { ClassesPrimariasController } from './classesprimarias.controller';
import { DatabaseModule } from 'src/database/database.modeule';

@Module({
  providers: [ClassesPrimariasService],
  controllers: [ClassesPrimariasController],
  imports: [DatabaseModule],
})
export class ClassesPrimariasModule {}
