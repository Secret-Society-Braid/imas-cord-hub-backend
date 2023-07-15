import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('meta')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Represents the meta info of API'
  })
  @ApiResponse({
    status: 200,
    description: 'returns the meta info of API'
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
