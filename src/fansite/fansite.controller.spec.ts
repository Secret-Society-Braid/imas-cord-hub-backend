import { Test, TestingModule } from '@nestjs/testing';
import { FansiteController } from './fansite.controller';
import { FansiteService } from './fansite.service';

describe('FansiteController', () => {
  let controller: FansiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FansiteController],
      providers: [FansiteService],
    }).compile();

    controller = module.get<FansiteController>(FansiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
