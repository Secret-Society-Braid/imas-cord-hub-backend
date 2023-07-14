import { Test, TestingModule } from '@nestjs/testing';
import { FansiteService } from './fansite.service';

describe('FansiteService', () => {
  let service: FansiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FansiteService],
    }).compile();

    service = module.get<FansiteService>(FansiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
