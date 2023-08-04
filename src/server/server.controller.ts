import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { ServerService } from './server.service';
import { serverType } from './interface/server.interface';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetServerResponse,
  ServerNotFoundResponse,
  ServerSearchTypeNotAcceptableResponse,
} from './server.dto';

@Controller('server')
@ApiTags('server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get()
  @ApiOperation({
    summary: 'Represents the list of all servers',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns the list of all servers',
    type: [GetServerResponse],
  })
  getAll(): Array<serverType> {
    return this.serverService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Represents the details of a server',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns the details of a server',
    type: GetServerResponse,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'when the server is not found',
    type: ServerNotFoundResponse,
  })
  getById(@Param('id') id: string): serverType {
    return this.serverService.getById(id);
  }

  @Get('find/latest')
  @ApiOperation({
    summary: 'Represents the latest server',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns the latest added server',
    type: GetServerResponse,
  })
  getLatest(): serverType {
    return this.serverService.getLatest();
  }

  @Get('search/:term')
  @ApiOperation({
    summary: 'Represents the search results of a server',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns the search results of a server',
    type: [GetServerResponse],
  })
  @ApiResponse({
    status: HttpStatus.NOT_ACCEPTABLE,
    description: 'when the searchType is not acceptable',
    type: ServerSearchTypeNotAcceptableResponse,
  })
  searchByTerm(
    @Query('searchType') searchType: string,
    @Param('term') term: string,
  ): Array<serverType> {
    return this.serverService.searchByTerm(searchType, term);
  }

  @Get('find/random')
  @ApiOperation({
    summary: 'Represents a randomly selected server',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns a randomly selected server',
    type: [GetServerResponse],
  })
  getRandom(@Query('amount') amount: string): Array<serverType> {
    const amountNumber = Number(amount);
    return this.serverService.getRandom(amountNumber ? amountNumber : 1);
  }
}
