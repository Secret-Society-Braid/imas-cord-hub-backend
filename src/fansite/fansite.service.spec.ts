import { Test, TestingModule } from '@nestjs/testing';
import { FansiteService } from './fansite.service';
import { fansiteType } from './interface/fansite.interface';

describe('FansiteService', () => {
  let service: FansiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FansiteService],
    }).compile();

    service = module.get<FansiteService>(FansiteService);
  });

  it('fansite root has to be array', () => {
    const parsed: Array<fansiteType> = JSON.parse(service.getAll());
    expect(parsed.length).toBe(1);
  });

  it('fansite id path has to be object and id equals', () => {
    const allData: Array<fansiteType> = JSON.parse(service.getAll());
    if (allData.length === 1) {
      expect(allData[0].id).toBe(1);
    } else {
      const randomId: number = Math.floor(Math.random() * allData.length);
      const parsed: fansiteType = JSON.parse(service.getById(String(randomId)));
      expect(parsed.id).toBe(randomId);
    }
  });

  it('fansite search path has to be array and should throw exception when invalid search type', () => {
    const allData: Array<fansiteType> = JSON.parse(service.getAll());
    const randomId: number = Math.floor(Math.random() * allData.length);
    const parsed: Array<fansiteType> = JSON.parse(
      service.searchByTerm('itself', allData[randomId].name),
    );
    expect(parsed.length).toBeGreaterThanOrEqual(1);
    expect(() =>
      service.searchByTerm('invalid', allData[randomId].name),
    ).toThrow();
  });

  it('fansite latest path has to be object', () => {
    const parsed: fansiteType = JSON.parse(service.getLatest());
    expect(parsed.id).toBe(1);
  });

  it('fansite random path has to be array', () => {
    const randomLength: number = Math.floor(Math.random() * 10);
    const parsed: Array<fansiteType> = JSON.parse(
      service.getRandom(randomLength),
    );
    expect(parsed.length).toBe(randomLength);
  });
});
