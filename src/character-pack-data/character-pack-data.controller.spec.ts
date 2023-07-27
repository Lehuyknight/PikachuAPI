import { Test, TestingModule } from '@nestjs/testing';
import { CharacterPackDataController } from './character-pack-data.controller';
import { CharacterPackDataService } from './character-pack-data.service';

describe('CharacterPackDataController', () => {
  let controller: CharacterPackDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterPackDataController],
      providers: [CharacterPackDataService],
    }).compile();

    controller = module.get<CharacterPackDataController>(CharacterPackDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
