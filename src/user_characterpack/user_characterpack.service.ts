import { Injectable } from '@nestjs/common'
import { CreateUserCharacterpackDto } from './dto/create-user_characterpack.dto'
import { UpdateUserCharacterpackDto } from './dto/update-user_characterpack.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { BuyPackDto } from './dto/buy-pack-dto'
import { UsePackDto } from './dto/use-pack-dto'

@Injectable()
export class UserCharacterpackService {
    constructor(private prisma: PrismaService) {}

    async create(createUserCharacterpackDto: CreateUserCharacterpackDto) {
        const newData = await this.prisma.user_CharacterPack.create({
            data: createUserCharacterpackDto,
        })
        return newData
    }

    async findAll(userId: string) {
        const allData = await this.prisma.user_CharacterPack.findMany({
            where: {
                users: {
                    id: userId,
                },
            },
            include: {
                characterPacksData: {
                    select: {
                        downloadLink: true,
                        fileName: true,
                        fullName: true,
                        price: true,
                    },
                },
            },
        })
        return { result: allData }
    }

    async buyPack(buyPackDto: BuyPackDto) {
        try {
            await this.prisma.user_CharacterPack.update({
                where: {
                    userId_packId: {
                        userId: buyPackDto.userId,
                        packId: buyPackDto.packId,
                    },
                },
                data: {
                    isBuy: true,
                },
            })
            return { result: true, error: null }
        } catch (error) {
            return { result: false, error: `${error}` }
        }
    }

    async usePack(usePackDto: UsePackDto) {
        let numOfSuccess = 0
        let numOfFails = 0

        for (const data of usePackDto.data) {
            try {
                await this.prisma.user_CharacterPack.update({
                    where: {
                        userId_packId: {
                            userId: usePackDto.userId,
                            packId: data.packId,
                        },
                    },
                    data: {
                        isUse: data.isUse,
                    },
                })
                numOfSuccess++
            } catch (error) {
                numOfFails++
                console.log(error)
            }
        }

        if (numOfFails === 0) {
            return { result: true, error: null }
        }

        return { result: null, error: 'Error' }
    }

    findOne(id: number) {
        return `This action returns a #${id} userCharacterpack`
    }

    update(id: number, updateUserCharacterpackDto: UpdateUserCharacterpackDto) {
        return `This action updates a #${id} userCharacterpack`
    }

    remove(id: number) {
        return `This action removes a #${id} userCharacterpack`
    }
}
