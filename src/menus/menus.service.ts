import { HttpException, Injectable } from '@nestjs/common';
import { Menu, Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenusService {
  
  constructor(private dataSources: PrismaService) {}

  async create(data: Prisma.MenuCreateInput) : Promise<Menu>  {
    try {
      return await this.dataSources.menu.create({
        data
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(`Error Create Restaurant`, 400); 
    }

  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MenuWhereUniqueInput;
    where?: Prisma.MenuWhereInput;
    orderBy?: Prisma.MenuOrderByWithRelationInput;
  }): Promise<Menu[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.dataSources.menu.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch (error) {
      throw new HttpException(`Error Get Restaurants`, 400);
    }
  }
  

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
