import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';

describe('HealthService', () => {
  let service: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    service = module.get<HealthService>(HealthService);
  });

  it('health root has', () => {
    const parsed: { status: string, uptime: number } = JSON.parse(service.getHealth());
    expect(parsed.status).toBe('UP');
    expect(parsed.uptime).toBeGreaterThan(0);
  });
});
