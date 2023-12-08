import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { FileuploaderController } from './fileuploader/fileuploader.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, FileuploaderController],
  providers: [AppService],
})
export class AppModule {}
