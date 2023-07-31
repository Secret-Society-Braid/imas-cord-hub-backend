import { Injectable } from '@nestjs/common';
import { toStringify } from '../util/jsonUtil';

@Injectable()
export class HealthService {
  getHealth(): string {
    return toStringify({
      status: 'UP',
      uptime: process.uptime(),
    });
  }
}
