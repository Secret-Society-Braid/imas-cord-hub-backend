import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VersionService } from './version.service';
import { versionType } from './interface/version.interface';

@Controller('version')
@ApiTags('meta')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Get()
  @ApiOperation({
    summary: 'Represents the version of the API',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns the version and other necessary information of this API',
  })
  getVersion(): versionType {
    return this.versionService.getVersion();
  }

  @Get(':identifier')
  @ApiOperation({
    summary: 'Represents the version number of the API',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'returns the version number of the API',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'when the identifier is invalid',
  })
  getVersionNumber(@Param() identifier: string): { identifier: string, number: number } {
    return this.versionService.getVersionNumber(identifier);
  }
}
