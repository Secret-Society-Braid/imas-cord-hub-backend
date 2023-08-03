import { Injectable } from '@nestjs/common';
import { serverType } from './interface/server.interface';
import { serverModel } from './model/server.model';

@Injectable()
export class ServerService {
  private readonly server: Array<serverType> = [...serverModel];

  getAll(): Array<serverType> {
    return this.server;
  }

  getById(id: string): serverType {
    return this.server.find((server) => server.id === id);
  }

  searchByTerm(searchType: string, term: string): Array<serverType> {
    switch (searchType) {
      case undefined:
        return this.server.filter(
            (server) =>
              server.name.toLowerCase().includes(term.toLowerCase()) ||
              server.waifu.some((waifu) =>
                waifu.toLowerCase().includes(term.toLowerCase()),
              ),
          );
      case 'itself':
        return this.server.filter((server) =>
            server.name.toLowerCase().includes(term.toLowerCase()),
          );
      case 'waifu':
        return this.server.filter((server) =>
            server.waifu.some((waifu) =>
              waifu.toLowerCase().includes(term.toLowerCase()),
            ),
          )
      default:
        throw new Error(`Invalid search type: ${searchType}`);
    }
  }

  getLatest(): serverType {
    return this.server[this.server.length - 1];
  }

  getRandom(amount: number): Array<serverType> {
    const randomServers: Array<serverType> = [];
    for (let i = 0; i < amount; i++) {
      randomServers.push(
        this.server[Math.floor(Math.random() * this.server.length)],
      );
    }
    return randomServers;
  }
}
