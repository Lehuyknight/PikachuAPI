import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AchivementService } from './achivement.service';
import { CreateAchivementDto } from './dto/create-achivement.dto';
import { UpdateAchivementDto } from './dto/update-achivement.dto';

@Controller('achivement')
export class AchivementController {
  constructor(private readonly achivementService: AchivementService) {}

  @Get()
  findAll() {
    return this.achivementService.findAll();
  }
  
  @Get('calc')
  calculate(){
    return this.achivementService.calculate();
  }
}
