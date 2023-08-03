import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { fansiteType } from './interface/fansite.interface';
import { fansiteModel } from './model/fansite.model';

@Injectable()
export class FansiteService {
  private readonly fansite: Array<fansiteType> = [...fansiteModel];

  getAll(): Array<fansiteType> {
    return this.fansite;
  }

  getById(id: string): fansiteType {
    const result = this.fansite.find((fansite) => fansite.id === id);
    if (result === undefined) {
      throw new NotFoundException('Fansite Not Found');
    }
    return result;
  }

  searchByTerm(searchType: string, term: string): Array<fansiteType> {
    switch (searchType) {
      case undefined:
        return this.fansite.filter(
          (fansite) =>
            fansite.name.toLowerCase().includes(term.toLowerCase()) ||
            fansite.waifu.toLowerCase().includes(term.toLowerCase()),
        );
      case 'itself':
        return this.fansite.filter((fansite) =>
          fansite.name.toLowerCase().includes(term.toLowerCase()),
        );
      case 'waifu':
        return this.fansite.filter((fansite) =>
          fansite.waifu.toLowerCase().includes(term.toLowerCase()),
        );
      default:
        throw new BadRequestException(`Invalid search type: ${searchType}`);
    }
  }

  getLatest(): fansiteType {
    return this.fansite[this.fansite.length - 1];
  }

  getRandom(amount: number): Array<fansiteType> {
    const randomFansites: Array<fansiteType> = [];
    for (let i = 0; i < amount; i++) {
      randomFansites.push(
        this.fansite[Math.floor(Math.random() * this.fansite.length)],
      );
    }
    return randomFansites;
  }
}
