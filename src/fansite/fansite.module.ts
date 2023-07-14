import { Module } from '@nestjs/common';
import { FansiteService } from './fansite.service';
import { FansiteController } from './fansite.controller';

@Module({
  providers: [FansiteService],
  controllers: [FansiteController]
})
export class FansiteModule {}
