import { Test, TestingModule } from '@nestjs/testing';
import { UserCharacterpackController } from './user_characterpack.controller';
import { UserCharacterpackService } from './user_characterpack.service';

describe('UserCharacterpackController', () => {
  let controller: UserCharacterpackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCharacterpackController],
      providers: [UserCharacterpackService],
    }).compile();

    controller = module.get<UserCharacterpackController>(UserCharacterpackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
