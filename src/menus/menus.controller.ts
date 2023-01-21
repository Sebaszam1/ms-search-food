import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Menus')
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @ApiOperation({
    summary: 'Endpoint para crear los menus',
    description: 'Endpoint para crear los menus teniendo en cuenta que se debe tener creado primero las categorias y restaurantes',
  })
  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }

  @ApiOperation({
    summary: 'Endpoint para obtener los menus',
    description: 'Endpoint para obtener los menus',
  })
  @Get()
  findAll() {
    return this.menusService.findAll({});
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.menusService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
  //   return this.menusService.update(+id, updateMenuDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.menusService.remove(+id);
  // }
}
