import { Injectable } from '@nestjs/common';
import { toStringify } from 'src/util/jsonUtil';
import { serverType } from './interface/server.interface';
import { serverModel } from './model/server.model';

@Injectable()
export class ServerService {
  private readonly server: Array<serverType> = [...serverModel];

  getAll(): string {
    return toStringify(this.server);
  }

  getById(id: string): string {
    return toStringify(this.server.find(server => server.id === Number(id)));
  }

  searchByTerm(searchType: string, term: string): string {
    switch (searchType) {
      case undefined:
        return toStringify(this.server.filter(server => server.name.toLowerCase().includes(term.toLowerCase()) || server.waifu.some(waifu => waifu.toLowerCase().includes(term.toLowerCase()))));
      case 'itself':
        return toStringify(this.server.filter(server => server.name.toLowerCase().includes(term.toLowerCase())));
      case 'waifu':
        return toStringify(this.server.filter(server => server.waifu.some(waifu => waifu.toLowerCase().includes(term.toLowerCase()))));
      default:
        throw new Error(`Invalid search type: ${searchType}`);
    }
  }

  getLatest(): string {
    return toStringify(this.server[this.server.length - 1]);
  }
}
