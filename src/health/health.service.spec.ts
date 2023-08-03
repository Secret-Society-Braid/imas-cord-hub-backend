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
    const health = service.getHealth();
    expect(health).toHaveProperty('status');
    expect(health).toHaveProperty('uptime');
    expect(health.status).toBe('OK');
    expect(health.uptime).toBeGreaterThan(0);
  });
});
