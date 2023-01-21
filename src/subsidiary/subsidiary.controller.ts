import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubsidiaryService } from './subsidiary.service';
import { CreateSubsidiaryDto } from './dto/create-subsidiary.dto';
import { UpdateSubsidiaryDto } from './dto/update-subsidiary.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Subsidiaries')
@Controller('subsidiary')
export class SubsidiaryController {
  constructor(private readonly subsidiaryService: SubsidiaryService) {}

  @Post()
  create(@Body() createSubsidiaryDto: CreateSubsidiaryDto) {
    return this.subsidiaryService.create(createSubsidiaryDto);
  }

  @Get()
  findAll() {
    return this.subsidiaryService.findAll({});
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.subsidiaryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSubsidiaryDto: UpdateSubsidiaryDto) {
  //   return this.subsidiaryService.update(+id, updateSubsidiaryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.subsidiaryService.remove(+id);
  // }
}
