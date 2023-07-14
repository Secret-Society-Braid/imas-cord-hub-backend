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
    if (searchType !== undefined) {
      if (searchType === 'itself') {
        return toStringify(this.server.filter(server => server.name.toLowerCase().includes(term.toLowerCase())));
      } else if (searchType === 'waifu') {
        return toStringify(this.server.filter(server => server.waifu.some(waifu => waifu.toLowerCase().includes(term.toLowerCase()))));
      }
    } else {
      return toStringify(this.server.filter(server => server.name.toLowerCase().includes(term.toLowerCase()) || server.waifu.some(waifu => waifu.toLowerCase().includes(term.toLowerCase()))));
    }
  }
}
