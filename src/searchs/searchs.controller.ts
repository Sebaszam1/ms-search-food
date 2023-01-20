import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SearchsService } from './searchs.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Search')
@Controller('searchs')
export class SearchsController {
  constructor(private readonly searchsService: SearchsService) {}

  @Post()
  create(@Body() createSearchDto: CreateSearchDto) {
    return this.searchsService.create(createSearchDto);
  }

  @Get()
  findAll() {
    return this.searchsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSearchDto: UpdateSearchDto) {
    return this.searchsService.update(+id, updateSearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.searchsService.remove(+id);
  }
}
