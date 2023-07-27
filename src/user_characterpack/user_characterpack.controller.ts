import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCharacterpackService } from './user_characterpack.service';
import { CreateUserCharacterpackDto } from './dto/create-user_characterpack.dto';
import { UpdateUserCharacterpackDto } from './dto/update-user_characterpack.dto';
import { BuyPackDto } from './dto/buy-pack-dto';
import { UsePackDto } from './dto/use-pack-dto';

@Controller('user-characterpack')
export class UserCharacterpackController {
  constructor(private readonly userCharacterpackService: UserCharacterpackService) {}

  @Post()
  create(@Body() createUserCharacterpackDto: CreateUserCharacterpackDto) {
    return this.userCharacterpackService.create(createUserCharacterpackDto);
  }

  @Post('buypack')
  buyPack(@Body() buyPackDto: BuyPackDto){
    return this.userCharacterpackService.buyPack(buyPackDto);
  }

  @Post('usepack')
  usePack(@Body() usePackDto: UsePackDto){
    return this.userCharacterpackService.usePack(usePackDto)
  }


  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.userCharacterpackService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCharacterpackService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCharacterpackDto: UpdateUserCharacterpackDto) {
    return this.userCharacterpackService.update(+id, updateUserCharacterpackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCharacterpackService.remove(+id);
  }
}
