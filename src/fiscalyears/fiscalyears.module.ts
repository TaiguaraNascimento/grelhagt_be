import { Module } from '@nestjs/common';
import { FiscalYearsService } from './fiscalyears.service';
import { FiscalYearsController } from './fiscalyears.controller';
import { DatabaseModule } from 'src/database/database.modeule';

@Module({
  providers: [FiscalYearsService],
  controllers: [FiscalYearsController],
  imports: [DatabaseModule],
})
export class FiscalYearsModule {}
