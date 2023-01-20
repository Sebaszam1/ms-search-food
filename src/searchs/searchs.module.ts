import { Module } from '@nestjs/common';
import { SearchsService } from './searchs.service';
import { SearchsController } from './searchs.controller';

@Module({
  controllers: [SearchsController],
  providers: [SearchsService]
})
export class SearchsModule {}
