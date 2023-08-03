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

  it('getAll() should be return an Array of fansiteType', () => {
    const res: Array<fansiteType> = service.getAll();
    expect(res).toBeInstanceOf(Array);
    expect(res[0]).toBeInstanceOf(Object);
  });

  it('getById() should be return a fansiteType', () => {
    const res: fansiteType = service.getById('10422c16-d21c-444f-9897-11e2f2546357');
    expect(res).toBeInstanceOf(Object);
    expect(res.id).toBe('10422c16-d21c-444f-9897-11e2f2546357');
  });

  it('getById() should be throw NotFoundException', () => {
    expect(() => service.getById('10422c16-d21c-444f-9897-11e2f2546358')).toThrowError('Fansite Not Found');
  });

  it('searchByTerm() should be return an Array of fansiteType', () => {
    const res: Array<fansiteType> = service.searchByTerm(undefined, 'a');
    expect(res).toBeInstanceOf(Array);
    expect(res[0]).toBeInstanceOf(Object);
  });

  it('searchByTerm() should throw BadRequestException when searchType is invalid', () => {
    expect(() => service.searchByTerm('invalid', 'a')).toThrowError('Invalid search type: invalid');
  });

  it('getLatest() should be return a fansiteType', () => {
    const res: fansiteType = service.getLatest();
    expect(res.id).toBe('10422c16-d21c-444f-9897-11e2f2546357');
  });

  it('getRandom() should be return an Array of fansiteType', () => {
    for(let i = 0; i < 10; i++) {
      const randomLength = Math.floor(Math.random() * 10);
      const res: Array<fansiteType> = service.getRandom(randomLength);
      expect(res.length).toBe(randomLength);
    }
  });
});
