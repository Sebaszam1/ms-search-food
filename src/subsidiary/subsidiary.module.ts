import { PrismaService } from 'src/core/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { SubsidiaryService } from './subsidiary.service';
import { SubsidiaryController } from './subsidiary.controller';

@Module({
  controllers: [SubsidiaryController],
  providers: [SubsidiaryService, PrismaService]
})
export class SubsidiaryModule {}
