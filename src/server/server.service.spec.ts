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

  // Re-write tests:
  // TODO: getAll()
  // TODO: getById()
  // TODO: searchByTerm()
  // TODO: getLatest()
  // TODO: getRandom()

});
