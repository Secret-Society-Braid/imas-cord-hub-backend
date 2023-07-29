import {
  Controller,
  Get,
  Header,
  Param,
  Query,
  HttpStatus,
} from '@nestjs/common';
import { FansiteService } from './fansite.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  FansiteNotFoundResponse,
  FansiteSearchTypeNotAcceptableResponse,
  GetFansiteResponse,
} from './fansite.dto';

@Controller('fansite')
@ApiTags('fansite')
export class FansiteController {
  constructor(private readonly fansiteService: FansiteService) {}

  @Get()
  @ApiOperation({
    summary: 'Represents the list of all fansites',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns the list of all fansites',
    type: [GetFansiteResponse],
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
    status: HttpStatus.OK,
    description: 'returns the details of a fansite',
    type: GetFansiteResponse,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'when the fansite is not found',
    type: FansiteNotFoundResponse,
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
    status: HttpStatus.OK,
    description: 'returns the search results of a fansite',
    type: [GetFansiteResponse],
  })
  @ApiResponse({
    status: HttpStatus.NOT_ACCEPTABLE,
    description: 'when the searchType is not acceptable',
    type: FansiteSearchTypeNotAcceptableResponse,
  })
  @Header('Content-Type', 'application/json')
  searchByTerm(
    @Query('searchType') searchType: string,
    @Param('term') term: string,
  ): string {
    return this.fansiteService.searchByTerm(searchType, term);
  }

  @Get('find/latest')
  @ApiOperation({
    summary: 'Represents the latest added fansite',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns the latest added fansite',
    type: GetFansiteResponse,
  })
  @Header('Content-Type', 'application/json')
  getLatest(): string {
    return this.fansiteService.getLatest();
  }

  @Get('find/random')
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
