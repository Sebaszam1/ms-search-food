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
  findAll() {
    return `This action returns all menus`;
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
