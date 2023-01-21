import { HttpException, Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private dataSources: PrismaService) {}
  
  async create(data: Prisma.CategoryCreateInput) : Promise<Category>  {
    try {
      return await this.dataSources.category.create({
        data
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(`Error Create Restaurant`, 400); 
    }

  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
