import { MenusService } from './menus.service';

import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './../core/prisma/prisma.service';

describe('RestaurantsService', () => {
  let menusService: MenusService;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService();
    menusService = new MenusService(prismaService);
  });

  describe('create', () => {
    it('should create a menu and return the created menu', async () => {
      const data = {
        name: 'Menu1',
        id: '5',
        description: 'Menu',
        menuStar: 5,
        price: 4,
        restaurantId: '12',
        categoryId: "5"
      };

      jest.spyOn(prismaService.menu, 'create').mockResolvedValue(data);

      const result = await menusService.create(data);

      expect(result).toBeDefined();
    });

    describe('findAll', () => {
      it('should return all subsidiaries', async () => {
        const params = { skip: 0, take: 10 };
  
        const result = await menusService.findAll(params);
  
        expect(result).toBeDefined();
      });
    });
  });
});