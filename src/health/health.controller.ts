import { Controller, Get, Header } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('meta')
export class HealthController {
  constructor (private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({
    summary: 'Represents the health of API that is used for Render health check'
  })
  @ApiResponse({
    status: 200,
    description: 'returns the health of API'
  })
  @Header('Content-Type', 'application/json')
  getHealth(): string {
    return this.healthService.getHealth();
  }
}
