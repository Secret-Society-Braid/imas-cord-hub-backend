import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServerService } from './server.service';

@Controller('server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get()
  getAll(): string {
    return this.serverService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return this.serverService.getById(id);
  }

  @Get('search/:term')
  searchByTerm(@Query('searchType') searchType: string, @Param('term') term: string): string {
    return this.serverService.searchByTerm(searchType, term);
  }
}
