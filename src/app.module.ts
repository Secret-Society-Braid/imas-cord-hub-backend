import { ServerModule } from './server/server.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FansiteModule } from './fansite/fansite.module';
import { HealthModule } from './health/health.module';
import { VersionModule } from './version/version.module';

@Module({
  imports: [ServerModule, FansiteModule, HealthModule, VersionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
