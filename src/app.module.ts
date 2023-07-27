import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserCharacterpackModule } from './user_characterpack/user_characterpack.module';
import { CharacterPackDataModule } from './character-pack-data/character-pack-data.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserCharacterpackModule, CharacterPackDataModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
