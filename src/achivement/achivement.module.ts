import { Module } from '@nestjs/common';
import { AchivementService } from './achivement.service';
import { AchivementController } from './achivement.controller';

@Module({
  controllers: [AchivementController],
  providers: [AchivementService]
})
export class AchivementModule {}
