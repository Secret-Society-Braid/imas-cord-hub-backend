import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): { status: string; uptime: number } {
    return { status: 'OK', uptime: process.uptime() };
  }
}
