import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterPackDatumDto } from './create-character-pack-datum.dto';
import { User_CharacterPack } from '@prisma/client';

export class UpdateCharacterPackDatumDto extends PartialType(CreateCharacterPackDatumDto) {
    fileName: string
    price: number
    fullName: string
    description: string
    downloadLink: string
}