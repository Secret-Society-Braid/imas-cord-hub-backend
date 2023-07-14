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
}
