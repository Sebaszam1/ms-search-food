import { Injectable } from '@nestjs/common';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';

@Injectable()
export class SearchsService {
  constructor(private restaurantsService: RestaurantsService){}

  async searchWord(word: string){
    const restaurants = await  this.restaurantsService.findAll({
      where: {
        name: {
          contains: word
        }
      }
    })

    const Menus = await  this.restaurantsService.findAll({
      where: {
        name: {
          contains: word
        }
      }
    })

    return { restaurants, Menus }
  }
}
