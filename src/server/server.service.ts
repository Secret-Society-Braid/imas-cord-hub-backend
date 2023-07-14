import { Injectable } from '@nestjs/common';
import { toStringify } from 'src/util/jsonUtil';
import { serverType } from './interface/server.interface';

@Injectable()
export class ServerService {
  private readonly server: Array<serverType> = [];

  getAll(): string {
    return toStringify({
      message: "Welcome to the API of the imas-cord-hub-backend!",
      location: "server"
    });
  }
}
