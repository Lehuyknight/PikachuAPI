import { Test, TestingModule } from '@nestjs/testing';
import { CharacterPackDataService } from './character-pack-data.service';

describe('CharacterPackDataService', () => {
  let service: CharacterPackDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterPackDataService],
    }).compile();

    service = module.get<CharacterPackDataService>(CharacterPackDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
