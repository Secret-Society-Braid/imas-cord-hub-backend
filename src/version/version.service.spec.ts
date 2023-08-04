import { Test, TestingModule } from '@nestjs/testing';
import { VersionService } from './version.service';
import { versionType } from './interface/version.interface';

describe('VersionService', () => {
  let service: VersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionService],
    }).compile();

    service = module.get<VersionService>(VersionService);
  });

  it('root should return version and last update information', () => {
    const actual: versionType = service.getVersion();
    expect(actual).toHaveProperty('version');
    expect(actual).toHaveProperty('lastUpdated');
    const numberRepresentation: string = `${actual.numbers.major}.${actual.numbers.minor}.${actual.numbers.patch}`;
    expect(actual.version).toBe(numberRepresentation);
  });

  it('should return version number', () => {
    const actual: { identifier: string; number: number } =
      service.getVersionNumber('major');
    expect(actual).toHaveProperty('identifier');
    expect(actual).toHaveProperty('number');
    expect(actual.identifier).toBe('major');
    expect(actual.number).toBe(1);
  });

  it('should throw BadRequestException when identifier is invalid', () => {
    expect(() => service.getVersionNumber('invalid')).toThrowError();
  });
});
