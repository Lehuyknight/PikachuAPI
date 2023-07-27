import { Test, TestingModule } from '@nestjs/testing';
import { UserCharacterpackService } from './user_characterpack.service';

describe('UserCharacterpackService', () => {
  let service: UserCharacterpackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCharacterpackService],
    }).compile();

    service = module.get<UserCharacterpackService>(UserCharacterpackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
