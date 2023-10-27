import { Test, TestingModule } from '@nestjs/testing';
import { UserSceneController } from './user_scene.controller';
import { UserSceneService } from './user_scene.service';

describe('UserSceneController', () => {
  let controller: UserSceneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserSceneController],
      providers: [UserSceneService],
    }).compile();

    controller = module.get<UserSceneController>(UserSceneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
