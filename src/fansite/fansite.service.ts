import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { fansiteType } from './interface/fansite.interface';
import { fansiteModel } from './model/fansite.model';
import { toStringify } from '../util/jsonUtil';

@Injectable()
export class FansiteService {
  private readonly fansite: Array<fansiteType> = [...fansiteModel];

  getAll(): string {
    return toStringify(this.fansite);
  }

  getById(id: string): string {
    const result = this.fansite.find(fansite => fansite.id === Number(id));
    if(result === undefined) {
      throw new NotFoundException('Fansite Not Found');
    }
    return toStringify(result);
  }

  searchByTerm(searchType: string, term: string): string {
    switch (searchType) {
      case undefined:
        return toStringify(
          this.fansite.filter(
            (fansite) =>
              fansite.name.toLowerCase().includes(term.toLowerCase()) ||
              fansite.waifu.toLowerCase().includes(term.toLowerCase()),
          ),
        );
      case 'itself':
        return toStringify(
          this.fansite.filter((fansite) =>
            fansite.name.toLowerCase().includes(term.toLowerCase()),
          ),
        );
      case 'waifu':
        return toStringify(
          this.fansite.filter((fansite) =>
            fansite.waifu.toLowerCase().includes(term.toLowerCase()),
          ),
        );
      default:
        throw new BadRequestException(`Invalid search type: ${searchType}`);
    }
  }

  getLatest(): string {
    return toStringify(this.fansite[this.fansite.length - 1]);
  }

  getRandom(amount: number): string {
    const randomFansites: Array<fansiteType> = [];
    for (let i = 0; i < amount; i++) {
      randomFansites.push(
        this.fansite[Math.floor(Math.random() * this.fansite.length)],
      );
    }
    return toStringify(randomFansites);
  }
}
