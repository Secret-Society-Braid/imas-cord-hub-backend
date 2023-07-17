import { Controller, Get, Header } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor (private readonly healthService: HealthService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getHealth(): string {
    return this.healthService.getHealth();
  }
}
