import { PrismaService } from './../core/prisma/prisma.service';
import { CategoriesService } from './../categories/categories.service';
import { MenusService } from './../menus/menus.service';
import { HttpException, Injectable } from '@nestjs/common';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';

@Injectable()
export class SearchsService {
  private prisma;
  constructor(
    private restaurantsService: RestaurantsService,
    private menuService: MenusService,
    private categoryService: CategoriesService,
  ) {
    this.prisma = new PrismaService();
  }

  async searchWord(word: string) {
    //*Buscar los platos que tengan la etiqueta de ese menu y organirzarlos dependiendo de las estrellas y el precio
    const preferencia = word.toUpperCase();
    const category = await this.prisma.Category.findMany({
      where: {
        name: preferencia,
      },
      include: {
        menus: {
          orderBy: [
            {
              menuStar: 'desc',
            },
            {
              price: 'asc',
            },
          ],
        },
      },
    });

    const Menus = await this.prisma.Menu.findMany({
      where: {
        name: {
          contains: preferencia,
        },
      },
      orderBy: [
        {
          menuStar: 'desc',
        },
        {
          price: 'asc',
        },
      ],
    });

    console.log(Menus);

    if (category.length !== 0) {
      return await this.prisma.Restaurant.findUnique({
        where: {
          id: category[0].menus[0].restaurantId,
        },
        include: {
          menus: {
            where: {
              OR: [
                {
                  name: {
                    contains: preferencia,
                  },
                },
                {
                  id: category[0].menus[0].id,
                },
              ],
            },
          },
          subsidiaries: true,
        },
      });
    } else if (Menus.length !== 0) {
      return await this.prisma.Restaurant.findUnique({
        where: {
          id: Menus[0].restaurantId,
        },
        include: {
          menus: {
            where: {
              name: {
                contains: preferencia,
              },
            },
          },
          subsidiaries: true,
        },
      });
    } else {
      throw new HttpException(`No existe comida de ese tipo ni ese menu`, 400);
    }
  }
}
