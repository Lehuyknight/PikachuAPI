import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserCharacterpackModule } from './user_characterpack/user_characterpack.module';
import { CharacterPackDataModule } from './character-pack-data/character-pack-data.module';
import { UserModule } from './user/user.module';
import { AchivementModule } from './achivement/achivement.module';
import { UserSceneModule } from './user_scene/user_scene.module';

@Module({
  imports: [PrismaModule, UserCharacterpackModule, CharacterPackDataModule, UserModule, AchivementModule, UserSceneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
