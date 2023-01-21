import { Subsidiary } from './entities/subsidiary.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateSubsidiaryDto } from './dto/create-subsidiary.dto';
import { UpdateSubsidiaryDto } from './dto/update-subsidiary.dto';

@Injectable()
export class SubsidiaryService {
  constructor(private dataSources: PrismaService) {}

  async create(data: Prisma.SubsidiaryCreateInput): Promise<Subsidiary> {
    try {
      console.log(data);
      return await this.dataSources.subsidiary.create({
        data,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(`Error Create subsidiary`, 400);
    }
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SubsidiaryWhereUniqueInput;
    where?: Prisma.SubsidiaryWhereInput;
    orderBy?: Prisma.SubsidiaryOrderByWithRelationInput;
  }): Promise<Subsidiary[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return this.dataSources.subsidiary.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch (error) {
      throw new HttpException(`Error Get Subsidiary`, 400);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} subsidiary`;
  }

  update(id: number, updateSubsidiaryDto: UpdateSubsidiaryDto) {
    return `This action updates a #${id} subsidiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} subsidiary`;
  }
}
