import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSceneDto } from './create-user_scene.dto';

export class UpdateUserSceneDto extends PartialType(CreateUserSceneDto) {}
