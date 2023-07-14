import { Controller, Get, Param } from '@nestjs/common';
import { ServerService } from './server.service';

@Controller()
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get('server')
  getAll(): string {
    return this.serverService.getAll();
  }

  @Get('server/:id')
  getById(@Param('id') id: string): string {
    return this.serverService.getById(id);
  }
}
