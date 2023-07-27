import { Module } from '@nestjs/common';
import { CharacterPackDataService } from './character-pack-data.service';
import { CharacterPackDataController } from './character-pack-data.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CharacterPackDataController],
  providers: [CharacterPackDataService],
  imports: [PrismaModule]
})
export class CharacterPackDataModule {}
