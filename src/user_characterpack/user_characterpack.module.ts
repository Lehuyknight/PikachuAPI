import { Module } from '@nestjs/common';
import { UserCharacterpackService } from './user_characterpack.service';
import { UserCharacterpackController } from './user_characterpack.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UserCharacterpackController],
  providers: [UserCharacterpackService],
  imports: [PrismaModule]
})
export class UserCharacterpackModule {}
