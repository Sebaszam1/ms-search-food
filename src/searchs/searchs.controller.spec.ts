import { Test, TestingModule } from '@nestjs/testing';
import { SearchsController } from './searchs.controller';
import { SearchsService } from './searchs.service';

describe('SearchsController', () => {
  let controller: SearchsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchsController],
      providers: [SearchsService],
    }).compile();

    controller = module.get<SearchsController>(SearchsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
