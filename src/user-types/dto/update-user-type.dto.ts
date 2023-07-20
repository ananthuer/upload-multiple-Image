import { PartialType } from '@nestjs/swagger';
import { CreateUserTypeDto } from './create-user-type.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'

export class UpdateUserTypeDto extends PartialType(CreateUserTypeDto) {
    @IsString()
    @ApiProperty()
    readonly username: string;

 
}
