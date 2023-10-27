import { Injectable } from '@nestjs/common'
import { CreateUserSceneDto } from './dto/create-user_scene.dto'
import { UpdateUserSceneDto } from './dto/update-user_scene.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserSceneService {
    constructor(private prisma: PrismaService) {}

    async create(createUserSceneDto: CreateUserSceneDto) {
        try {
            const newData = await this.prisma.user_Scene.create({
                data: createUserSceneDto,
            })
            return newData
        } catch (err) {
            return err
        }
    }

    async findAll() {
        return `Có con chim tao nè`
    }

    async findOne(id: string) {
        try {
            const result = await this.prisma.user_Scene.findMany({
                select: {
                    sceneId: true,
                },
                where: {
                    userId: {
                        equals: id,
                    },
                },
            })
            const sceneIds = result.map((item) => item.sceneId)
            return { result: sceneIds }
        } catch (err) {
            return err
        }
    }

    update(id: number, updateUserSceneDto: UpdateUserSceneDto) {
        return `This action updates a #${id} userScene`
    }

    remove(id: number) {
        return `This action removes a #${id} userScene`
    }
}
