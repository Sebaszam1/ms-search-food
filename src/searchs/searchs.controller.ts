import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SearchsService } from './searchs.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Search')
@Controller('searchs')
export class SearchsController {
  constructor(private readonly searchsService: SearchsService) {}


  @ApiOperation({
    summary: 'Endpoint para buscar plato o categoria de comida',
    description: 'Buscar algun plato por el nombre o una categoria especifica de comida,nos regresa el restaurante que tiene el plato con la mejor calificación de estrellas y además si hay mas platos en ese resturante que contengan la palabra que se escribio',
  })
  @Get(':word')
  findOne(@Param('word') word: string) {
    return this.searchsService.searchWord(word);
  }
}
