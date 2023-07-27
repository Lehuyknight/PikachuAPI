import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterPackDataService } from './character-pack-data.service';
import { CreateCharacterPackDatumDto } from './dto/create-character-pack-datum.dto';
import { UpdateCharacterPackDatumDto } from './dto/update-character-pack-datum.dto';

@Controller('character-pack-data')
export class CharacterPackDataController {
  constructor(private readonly characterPackDataService: CharacterPackDataService) {}

  @Post()
  create(@Body() createCharacterPackDatumDto: CreateCharacterPackDatumDto) {
    return this.characterPackDataService.create(createCharacterPackDatumDto);
  }

  @Get()
  findAll() {
    return this.characterPackDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterPackDataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterPackDatumDto: UpdateCharacterPackDatumDto) {
    return this.characterPackDataService.update(id, updateCharacterPackDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterPackDataService.remove(id);
  }
}
