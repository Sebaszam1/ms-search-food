import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SearchsService } from './searchs.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Search')
@Controller('searchs')
export class SearchsController {
  constructor(private readonly searchsService: SearchsService) {}


  @Get(':word')
  findOne(@Param('word') word: string) {
    return this.searchsService.searchWord(word);
  }
}
