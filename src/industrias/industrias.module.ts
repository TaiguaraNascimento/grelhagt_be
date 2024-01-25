import { Module } from '@nestjs/common';
import { IndustriasService } from './industrias.service';
import { IndustriasController } from './industrias.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [IndustriasService],
  controllers: [IndustriasController],
  imports: [DatabaseModule],
})
export class IndustriasModule {}
