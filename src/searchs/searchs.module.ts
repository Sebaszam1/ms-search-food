import { Module } from '@nestjs/common';
import { SearchsService } from './searchs.service';
import { SearchsController } from './searchs.controller';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { MenusService } from 'src/menus/menus.service';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  controllers: [SearchsController],
  providers: [SearchsService,RestaurantsService,PrismaService, MenusService, CategoriesService, PrismaService]
})
export class SearchsModule {}
