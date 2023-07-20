import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'

export class CreateUserTypeDto {
    @IsString()
    @ApiProperty()
    readonly username: string;
   
}
