import { Injectable } from '@nestjs/common';
import { toStringify } from './util/jsonUtil';

@Injectable()
export class AppService {
  getHello(): string {
    return toStringify({
      "message": "Welcome to the API of the imas-cord-hub-backend!"
    });
  }
}
