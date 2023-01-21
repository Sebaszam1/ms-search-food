import { SearchsService } from './searchs.service';
import { PrismaService } from './../core/prisma/prisma.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { MenusService } from './../menus/menus.service';
import { CategoriesService } from './../categories/categories.service';

describe('SearchsService', () => {
  let searchsService: SearchsService;
  let prismaService: PrismaService;
  let restaurantsService: RestaurantsService;
  let menusService: MenusService;
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    prismaService = new PrismaService();
    restaurantsService = new RestaurantsService(prismaService);
    menusService = new MenusService(prismaService);
    categoriesService = new CategoriesService(prismaService);
    searchsService = new SearchsService(
      restaurantsService,
      menusService,
      categoriesService,
    );
  });

  describe('searchWord', () => {
    it('should return a restaurant matching the search word', async () => {
      const mockCategory = {
        name: 'Pizza',
        id: '5',
        description: 'Pizza',
        menus: [
            {
                menuStar: 5,
                price: 10,
                restaurantId: 1
            },
        ],
      };

      const mockMenus = [
        {
          name: 'Pizza Margarita',
          menuStar: 4,
          price: 8,
          restaurantId: '1',
          id: '1',
          description: 'Pizza Margarita',
          categoryId: '5',
        },
      ];

      const mockRestaurant = {
        id: '1',
        name: 'Casa de campo',
        cel: "5562332",
        phone: "121223",
        dir: "Calle 155",
        menus: [
          {
            name: 'Pizza Margarita',
            menuStar: 4,
            price: 8,
            restaurantId: 1,
          },
        ],
        subsidiaries: [
          {
            id: '10',
            name: 'Casa',
            subStar: 2,
            restaurantId: '1',
          },
        ],
      };

      jest
        .spyOn(prismaService.category, 'findMany')
        .mockResolvedValue([mockCategory]);
      jest.spyOn(prismaService.menu, 'findMany').mockResolvedValue(mockMenus);
      jest
        .spyOn(prismaService.restaurant, 'findUnique')
        .mockResolvedValue(mockRestaurant);

      const result = await searchsService.searchWord('pizza');
      expect(result).toBeDefined();
    });

    it('ERROR', async () => {
      jest.spyOn(prismaService.category, 'findMany').mockResolvedValue([]);
      jest.spyOn(prismaService.menu, 'findMany').mockResolvedValue([]);

      try {
        await searchsService.searchWord('notexist');
      } catch (error) {
        expect(error.message).toEqual(
          'No existe comida de ese tipo ni ese menu',
        );
        expect(error.status).toEqual(400);
      }
    });
  });
});
