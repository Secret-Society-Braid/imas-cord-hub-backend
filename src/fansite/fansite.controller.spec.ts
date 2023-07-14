import { Test, TestingModule } from '@nestjs/testing';
import { FansiteController } from './fansite.controller';

describe('FansiteController', () => {
  let controller: FansiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FansiteController],
    }).compile();

    controller = module.get<FansiteController>(FansiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
