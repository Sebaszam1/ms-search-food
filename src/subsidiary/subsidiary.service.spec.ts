import { HttpException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './../core/prisma/prisma.service';
import { SubsidiaryService } from './subsidiary.service';

describe('SubsidiaryService', () => {
  let subsidiaryService: SubsidiaryService;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService();
    subsidiaryService = new SubsidiaryService(prismaService);
  });

  describe('create', () => {
    it('should create a subsidiary and return the created subsidiary', async () => {
      const data = {
        name: 'subsidiary1',
        id: '5',
        subStar: 4,
        restaurantId: '55',
        geocodes: {}
      };

      jest.spyOn(prismaService.subsidiary,
        'create').mockResolvedValue(data)

      const result = await subsidiaryService.create(data);

      expect(result).toBeDefined();
    });
  });

  describe('findAll', () => {
    it('should return all subsidiaries', async () => {
      const params = { skip: 0, take: 10 };

      const result = await subsidiaryService.findAll(params);

      expect(result).toBeDefined();
    });
  });
});
