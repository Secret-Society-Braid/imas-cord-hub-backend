import { Controller, Get, Header, Param, Query } from '@nestjs/common';
import { ServerService } from './server.service';

@Controller('server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getAll(): string {
    return this.serverService.getAll();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getById(@Param('id') id: string): string {
    return this.serverService.getById(id);
  }

  @Get('latest')
  @Header('Content-Type', 'application/json')
  getLatest(): string {
    return this.serverService.getLatest();
  }

  @Get('search/:term')
  @Header('Content-Type', 'application/json')
  searchByTerm(@Query('searchType') searchType: string, @Param('term') term: string): string {
    return this.serverService.searchByTerm(searchType, term);
  }

  @Get('random')
  @Header('Content-Type', 'application/json')
  getRandom(@Query('amount') amount: string): string {
    const amountNumber = Number(amount);
    return this.serverService.getRandom(amountNumber ? amountNumber : 1);
  }
}
