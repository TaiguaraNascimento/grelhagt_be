import { StorageService } from '../services/storage.service';
import { FileInterceptor } from '@nestjs/platform-express';

import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

const storageService = new StorageService();

@Controller('fileuploader')
export class FileuploaderController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: storageService.getStorage(),
    }),
  )
  async uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}
