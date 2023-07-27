import { User_CharacterPack } from "@prisma/client"
import {v4} from "uuid"
export class CreateCharacterPackDatumDto {
    fileName: string
    price: number
    fullName: string
    description: string
    downloadLink: string    
}
