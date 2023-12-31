import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('meta')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Represents the meta info of API',
  })
  @ApiResponse({
    status: 200,
    description: 'returns the meta info of API',
  })
  @Header('Content-Type', 'application/json')
  async getHello(): Promise<{ message: string }> {
    return this.appService.getHello();
  }
}
