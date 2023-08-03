import { Controller, Get, Header, Param, Query } from '@nestjs/common';
import { ServerService } from './server.service';
import { serverType } from './interface/server.interface';

@Controller('server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get()
  getAll(): Array<serverType> {
    return this.serverService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): serverType {
    return this.serverService.getById(id);
  }

  @Get('find/latest')
  @Header('Content-Type', 'application/json')
  getLatest(): serverType {
    return this.serverService.getLatest();
  }

  @Get('search/:term')
  @Header('Content-Type', 'application/json')
  searchByTerm(
    @Query('searchType') searchType: string,
    @Param('term') term: string,
  ): Array<serverType> {
    return this.serverService.searchByTerm(searchType, term);
  }

  @Get('find/random')
  @Header('Content-Type', 'application/json')
  getRandom(@Query('amount') amount: string): Array<serverType> {
    const amountNumber = Number(amount);
    return this.serverService.getRandom(amountNumber ? amountNumber : 1);
  }
}
