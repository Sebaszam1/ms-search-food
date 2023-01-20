import { Module } from '@nestjs/common';
import { SearchsService } from './searchs.service';
import { SearchsController } from './searchs.controller';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [SearchsController],
  providers: [SearchsService,RestaurantsService,PrismaService]
})
export class SearchsModule {}
