import { Module } from '@nestjs/common';
import { ClassesSecundariasService } from './classessecundarias.service';
import { ClassesSecundariasController } from './classessecundarias.controller';
import { DatabaseModule } from 'src/database/database.modeule';

@Module({
  providers: [ClassesSecundariasService],
  controllers: [ClassesSecundariasController],
  imports: [DatabaseModule],
})
export class ClassesSecundariasModule {}
