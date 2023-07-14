import { Controller, Get, Param, Query } from '@nestjs/common';
import { FansiteService } from './fansite.service';

@Controller('fansite')
export class FansiteController {
  constructor(private readonly fansiteService: FansiteService) {}

  @Get()
  getAll(): string {
    return this.fansiteService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return this.fansiteService.getById(id);
  }

  @Get('search/:term')
  searchByTerm(@Query('searchType') searchType: string, @Param('id') id: string): string {
    return this.fansiteService.searchByTerm(searchType, id);
  }
}
