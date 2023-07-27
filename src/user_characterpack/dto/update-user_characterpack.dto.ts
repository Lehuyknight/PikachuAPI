import { PartialType } from '@nestjs/mapped-types';
import { CreateUserCharacterpackDto } from './create-user_characterpack.dto';

export class UpdateUserCharacterpackDto extends PartialType(CreateUserCharacterpackDto) {}
