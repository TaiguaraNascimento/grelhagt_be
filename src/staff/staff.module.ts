import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { DatabaseModule } from 'src/database/database.modeule';

@Module({
  imports: [DatabaseModule],
  providers: [StaffService],
  controllers: [StaffController],
})
export class StaffModule {}
