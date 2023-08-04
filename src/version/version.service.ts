import { BadRequestException, Injectable } from '@nestjs/common';
import { versionType } from './interface/version.interface';

const major: number = 1;
const minor: number = 1;
const patch: number = 0;

const version: string = `${major}.${minor}.${patch}`;

@Injectable()
export class VersionService {
  private readonly version: versionType = {
    version: version,
    lastUpdated: '2023-08-01',
    numbers: {
      major: major,
      minor: minor,
      patch: patch,
    },
  };

  getVersion(): versionType {
    return this.version;
  }

  getVersionNumber(identifier: string): { identifier: string; number: number } {
    switch (identifier) {
      case 'major':
        return { identifier: identifier, number: this.version.numbers.major };
      case 'minor':
        return { identifier: identifier, number: this.version.numbers.minor };
      case 'patch':
        return { identifier: identifier, number: this.version.numbers.patch };
      default:
        throw new BadRequestException(`Invalid identifier: ${identifier}`);
    }
  }
}
