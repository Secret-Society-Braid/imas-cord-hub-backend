import { Injectable } from '@nestjs/common';
import { toStringify } from 'src/util/jsonUtil';

@Injectable()
export class HealthService {
  getHealth(): string {
    return toStringify({
      status: 'UP',
      uptime: process.uptime(),
    });
  }
}
