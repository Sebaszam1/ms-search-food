import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, Restaurant } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(private dataSources: PrismaService) {}

  async create(data: Prisma.RestaurantCreateInput): Promise<Restaurant> {
    try {
      console.log(data);
      return await this.dataSources.restaurant.create({
        data,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(`Error Create Restaurant`, 400);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RestaurantWhereUniqueInput;
    where?: Prisma.RestaurantWhereInput;
    orderBy?: Prisma.RestaurantOrderByWithRelationInput;
  }): Promise<Restaurant[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.dataSources.restaurant.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
        include: {
          subsidiaries: true,
          menus: true,
        }
      });
    } catch (error) {
      throw new HttpException(`Error Get Restaurants`, 400);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
