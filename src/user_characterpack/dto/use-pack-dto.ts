export class UsePackDto{
    userId: string
    data: DataList[]
}

class DataList{
    packId: string
    isUse: boolean
}