import { Module } from '@nestjs/common';
import { UserSceneService } from './user_scene.service';
import { UserSceneController } from './user_scene.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [UserSceneController],
  providers: [UserSceneService],
  imports: [PrismaModule]
})
export class UserSceneModule {}
