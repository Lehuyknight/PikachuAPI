import { Injectable } from '@nestjs/common';
import { CreateCharacterPackDatumDto } from './dto/create-character-pack-datum.dto';
import { UpdateCharacterPackDatumDto } from './dto/update-character-pack-datum.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DateTime } from 'luxon';
import {v4} from "uuid";
@Injectable()
export class CharacterPackDataService {
  constructor(private prisma: PrismaService){}
  async create(createCharacterPackDatumDto: CreateCharacterPackDatumDto) {
    const newPack = await this.prisma.characterPackData.create({
      data:{...createCharacterPackDatumDto, id: v4()}
    })
    return newPack;
  }

  async findAll() {
    const packs = await this.prisma.characterPackData.findMany({
      where:{
        deleteAt:{
          equals: null
        }
      }
    })
    return {result: packs};
  }

  async findOne(id: string) {
    const pack = await this.prisma.characterPackData.findUnique({
      where:{
        id: id
      }
    })
    return pack
  }

  async update(id: string, updateCharacterPackDatumDto: UpdateCharacterPackDatumDto) {
    const modifiedPack = await this.prisma.characterPackData.update(
      {
        where:{
          id: id
        },
        data: updateCharacterPackDatumDto
      }
    )
    return modifiedPack
  }

  async remove(id: string) {
    const deletedPack = await this.prisma.characterPackData.update({
      where:{
        id: id
      },
      data:{
        deleteAt: DateTime.now().toISO()
      }
    })
    return deletedPack
  }
}
