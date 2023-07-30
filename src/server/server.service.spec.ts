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
    const parsed: Array<serverType> = JSON.parse(
      service.getAll(),
    ) as Array<serverType>;
    expect(parsed.length).toBe(1);
  });

  it('server search path has to be array and should throw exception when invalid search type', () => {
    const allData: Array<serverType> = JSON.parse(
      service.getAll(),
    ) as Array<serverType>;
    const randomId: number = Math.floor(Math.random() * allData.length);
    const parsed: Array<serverType> = JSON.parse(
      service.searchByTerm('itself', allData[randomId].name),
    ) as Array<serverType>;
    expect(parsed.length).toBeGreaterThanOrEqual(1);
    expect(() =>
      service.searchByTerm('invalid', allData[randomId].name),
    ).toThrow();
  });

  it('server latest path has to be object', () => {
    const parsed: serverType = JSON.parse(service.getLatest()) as serverType;
    expect(parsed.id).toBe('9bffce54-d95e-4f51-b8d1-8b68aaea605a');
  });

  it('server random path has to be array', () => {
    const randomLength: number = Math.floor(Math.random() * 10);
    const parsed: Array<serverType> = JSON.parse(
      service.getRandom(randomLength),
    ) as Array<serverType>;
    expect(parsed.length).toBe(randomLength);
  });
});
