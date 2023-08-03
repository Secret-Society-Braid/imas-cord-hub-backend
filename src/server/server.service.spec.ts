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

  it('getAll() should return an array of serverType', () => {
    const result: Array<serverType> = service.getAll();
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(Object);
  });

  it('getById() should return a serverType', () => {
    const result: serverType = service.getById('9bffce54-d95e-4f51-b8d1-8b68aaea605a');
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBe('9bffce54-d95e-4f51-b8d1-8b68aaea605a');
  });

  it('searchByTerm() should return an array of serverType', () => {
    const result: Array<serverType> = service.searchByTerm('itself', 'デレマス');
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(Object);
  });

  it('searchByTerm() should throw an error when searchType is invalid', () => {
    expect(() => service.searchByTerm('invalid', 'デレマス')).toThrowError();
  });

  it('getLatest() should return a serverType', () => {
    const result: serverType = service.getLatest();
    expect(result).toBeInstanceOf(Object);
    expect(result.id).toBe('9bffce54-d95e-4f51-b8d1-8b68aaea605a');
  });

  it('getRandom() should return an array of serverType', () => {
    for(let i = 0; i < 10; i++) {
      const randomLength: number = Math.floor(Math.random() * 10);
      const result: Array<serverType> = service.getRandom(randomLength);
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(randomLength);
    }
  });
});
