import Settings from '../../backend/config/Settings';
import { Injectable, Global } from '@nestjs/common';
import { diskStorage } from 'multer';
import path from 'path';

@Global()
@Injectable()
export class StorageService {
  public getStorage() {
    return diskStorage({
      destination: Settings.FILESTORAGE_PATH(),
      filename: (req, file, cb) => {
        const novoNomeDeArquivo = path
          .parse(file.originalname)
          .name.replace(/\s/g, '');

        const extensao = path.parse(file.originalname).ext;

        return cb(null, `${novoNomeDeArquivo}${extensao}`);
      },
    });
  }
}
