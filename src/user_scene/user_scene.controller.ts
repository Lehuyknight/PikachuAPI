import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserSceneService } from './user_scene.service';
import { CreateUserSceneDto } from './dto/create-user_scene.dto';
import { UpdateUserSceneDto } from './dto/update-user_scene.dto';

@Controller('user-scene')
export class UserSceneController {
  constructor(private readonly userSceneService: UserSceneService) {}

  @Post()
  create(@Body() createUserSceneDto: CreateUserSceneDto) {
    return this.userSceneService.create(createUserSceneDto);
  }

  @Get()
  findAll() {
    return this.userSceneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSceneService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSceneDto: UpdateUserSceneDto) {
    return this.userSceneService.update(+id, updateUserSceneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSceneService.remove(+id);
  }
}
