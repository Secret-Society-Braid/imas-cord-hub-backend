import { Injectable } from '@nestjs/common';
import { fansiteType } from './interface/fansite.interface';
import { fansiteModel } from './model/fansite.model';
import { toStringify } from 'src/util/jsonUtil';

@Injectable()
export class FansiteService {
  private readonly fansite: Array<fansiteType> = [...fansiteModel];

  getAll(): string {
    return toStringify(this.fansite);
  }

  getById(id: string): string {
    return toStringify(this.fansite.find(fansite => fansite.id === Number(id)));
  }

  searchByTerm(searchType: string, term: string): string {
    switch (searchType) {
      case undefined:
        return toStringify(this.fansite.filter(fansite => fansite.name.toLowerCase().includes(term.toLowerCase()) || fansite.waifu.toLowerCase().includes(term.toLowerCase())));
      case 'itself':
        return toStringify(this.fansite.filter(fansite => fansite.name.toLowerCase().includes(term.toLowerCase())));
      case 'waifu':
        return toStringify(this.fansite.filter(fansite => fansite.waifu.toLowerCase().includes(term.toLowerCase())));
      default:
        throw new Error(`Invalid search type: ${searchType}`);
    }
  }

  getLatest(): string {
    return toStringify(this.fansite[this.fansite.length - 1]);
  }
}
