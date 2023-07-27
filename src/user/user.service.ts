import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DateTime } from 'luxon';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    const checkUserExist = await this.prisma.user.findMany({
      where:{
        id: createUserDto.id
      }
    });
    if(checkUserExist.length == 0){
      const newUser = await this.prisma.user.create({
        data:createUserDto
      });
      const characterPackData = await this.prisma.characterPackData.findMany({
        where: {
          deleteAt: {
            equals: null
          }
        },
      });
    
      for (const data of characterPackData) {
        if(data.fileName != "default"){
          await this.prisma.user_CharacterPack.create({
            data: {
              isBuy: false,
              isUse: false,
              characterPacksData: {
                connect: {
                  id: data.id,
                },
              },
              users: {
                connect: {
                  id: newUser.id,
                },
              },
            },
          });
        }
        else{
          await this.prisma.user_CharacterPack.create({
            data: {
              isBuy: true,
              isUse: true,
              characterPacksData: {
                connect: {
                  id: data.id,
                },
              },
              users: {
                connect: {
                  id: newUser.id,
                },
              },
            },
          });
        }
        }
      return newUser;
    }
    
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      where:{
        deleteAt:{
          equals: null
        }
      }
    });
    return users
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where:{
        id:id
      }
    });
    return user;
  }

  async update(id: string) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string ) {
    const deleteUser = await this.prisma.user.update({
      where: {
        id: id
      },
      data:{
        deleteAt: DateTime.now().toISO()
      }
    }) 
    return deleteUser;
  }
}
