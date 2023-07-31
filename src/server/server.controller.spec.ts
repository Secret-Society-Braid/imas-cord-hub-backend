import { Test, TestingModule } from '@nestjs/testing';
import { ServerController } from './server.controller';
import { serverType } from './interface/server.interface';
import { ServerService } from './server.service';

describe('ServerController', () => {
  let controller: ServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerController],
      providers: [ServerService],
    }).compile();

    controller = module.get<ServerController>(ServerController);
  });

  it('server root array length has', () => {
    const parsed: Array<serverType> = JSON.parse(
      controller.getAll(),
    ) as Array<serverType>;
    expect(parsed.length).toBe(1);
  });
});
