import { Injectable } from '@nestjs/common';
import { CreateAchivementDto } from './dto/create-achivement.dto';
import { UpdateAchivementDto } from './dto/update-achivement.dto';
import { json } from 'stream/consumers';
const AchivementJsonData = require("../../data/AchivementList.json");

@Injectable()
export class AchivementService {

  findAll() {
    return AchivementJsonData;
  }

  calculate(){
    const x = 20;
    const y = 10;
    const hint = "hint";
    const shuffle = "shuffle";

    let itemArray = Array(x+y).fill(hint, 0, x).fill(shuffle, x, x+y);
    return itemArray;

  }
}
