import { Controller, Get, Header, Param, Query } from '@nestjs/common';
import { FansiteService } from './fansite.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('fansite')
@ApiTags('fansite')
export class FansiteController {
  constructor(private readonly fansiteService: FansiteService) {}

  @Get()
  @ApiOperation({
    summary: 'Represents the list of all fansites',
  })
  @ApiResponse({
    status: 200,
    description: 'returns the list of all fansites',
  })
  @Header('Content-Type', 'application/json')
  getAll(): string {
    return this.fansiteService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Represents the details of a fansite',
  })
  @ApiResponse({
    status: 200,
    description: 'returns the details of a fansite',
  })
  @ApiResponse({
    status: 404,
    description: 'when the fansite is not found',
  })
  @Header('Content-Type', 'application/json')
  getById(@Param('id') id: string): string {
    return this.fansiteService.getById(id);
  }

  @Get('search/:term')
  @ApiOperation({
    summary: 'Represents the search results of a fansite',
  })
  @ApiResponse({
    status: 200,
    description: 'returns the search results of a fansite',
  })
  @ApiResponse({
    status: 500,
    description: 'when the searchType is not acceptable',
  })
  @Header('Content-Type', 'application/json')
  searchByTerm(
    @Query('searchType') searchType: string,
    @Param('id') id: string,
  ): string {
    return this.fansiteService.searchByTerm(searchType, id);
  }

  @Get('latest')
  @ApiOperation({
    summary: 'Represents the latest added fansite',
  })
  @ApiResponse({
    status: 200,
    description: 'returns the latest added fansite',
  })
  @Header('Content-Type', 'application/json')
  getLatest(): string {
    return this.fansiteService.getLatest();
  }

  @Get('random')
  @ApiOperation({
    summary: 'Represents the random fansites',
  })
  @ApiResponse({
    status: 200,
    description: 'returns the random fansites',
  })
  @Header('Content-Type', 'application/json')
  getRandom(@Query('amount') amount: string): string {
    const amountNumber = Number(amount);
    return this.fansiteService.getRandom(amountNumber ? amountNumber : 1);
  }
}
