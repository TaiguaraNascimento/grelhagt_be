import { Test, TestingModule } from '@nestjs/testing';
import { FileuploaderController } from './fileuploader.controller';

describe('FileuploaderController', () => {
  let controller: FileuploaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileuploaderController],
    }).compile();

    controller = module.get<FileuploaderController>(FileuploaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
