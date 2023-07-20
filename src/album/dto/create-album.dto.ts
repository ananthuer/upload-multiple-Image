import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'


export class CreateAlbumDto {

    @IsString()
    @ApiProperty()
    readonly userId: number;

    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @ApiProperty()
    readonly description: string;
}
