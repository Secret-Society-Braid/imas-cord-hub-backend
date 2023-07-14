import { ServerModule } from './server/server.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
