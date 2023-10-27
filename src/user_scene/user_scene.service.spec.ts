import { Test, TestingModule } from '@nestjs/testing';
import { UserSceneService } from './user_scene.service';

describe('UserSceneService', () => {
  let service: UserSceneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserSceneService],
    }).compile();

    service = module.get<UserSceneService>(UserSceneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
