import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './../core/prisma/prisma.service';
import { RestaurantsService } from './restaurants.service';

describe('RestaurantsService', () => {
  let restaurantsService: RestaurantsService;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService();
    restaurantsService = new RestaurantsService(prismaService);
  });

  describe('create', () => {
    it('should create a restaurant and return the created restaurant', async () => {
      const data = {
        name: 'restaurant1',
        id: '5',
        phone: '541521',
        cel: '1512',
        dir: 'Calle 12',
      };

      jest.spyOn(prismaService.restaurant, 'create').mockResolvedValue(data);

      const result = await restaurantsService.create(data);

      expect(result).toBeDefined();
    });

    describe('findAll', () => {
      it('should return all subsidiaries', async () => {
        const params = { skip: 0, take: 10 };
  
        const result = await restaurantsService.findAll(params);
  
        expect(result).toBeDefined();
      });
    });
  });
});
