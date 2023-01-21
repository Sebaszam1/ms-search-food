import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @ApiOperation({
    summary: 'Endpoint para crear los restaurantes',
    description: 'Endpoint para crear los restaurantes',
  })
  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @ApiOperation({
    summary: 'Endpoint para obetener los restaurantes',
    description: 'Endpoint para obtener los restaurantes',
  })
  @Get()
  findAll() {
    return this.restaurantsService.findAll({});
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.restaurantsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
  //   return this.restaurantsService.update(+id, updateRestaurantDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.restaurantsService.remove(+id);
  // }
}
