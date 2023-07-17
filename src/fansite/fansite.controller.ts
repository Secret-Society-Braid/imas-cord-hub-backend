import { Controller, Get, Header, Param, Query } from '@nestjs/common';
import { FansiteService } from './fansite.service';

@Controller('fansite')
export class FansiteController {
  constructor(private readonly fansiteService: FansiteService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getAll(): string {
    return this.fansiteService.getAll();
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getById(@Param('id') id: string): string {
    return this.fansiteService.getById(id);
  }

  @Get('search/:term')
  @Header('Content-Type', 'application/json')
  searchByTerm(@Query('searchType') searchType: string, @Param('id') id: string): string {
    return this.fansiteService.searchByTerm(searchType, id);
  }
}
