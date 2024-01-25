import { Module } from '@nestjs/common';
import { FiliaisService } from './filiais.service';
import { FiliaisController } from './filiais.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [FiliaisService],
  controllers: [FiliaisController],
})
export class FiliaisModule {}
