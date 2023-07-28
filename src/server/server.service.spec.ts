import { Test, TestingModule } from '@nestjs/testing';
import { ServerService } from './server.service';
import { serverType } from './interface/server.interface';

describe('ServerService', () => {
  let service: ServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerService],
    }).compile();

    service = module.get<ServerService>(ServerService);
  });

  it('server root array length has', () => {
    const parsed: Array<serverType> = JSON.parse(service.getAll()) as Array<serverType>;
    expect(parsed.length).toBe(1);
  });
});
