import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ValidationPipe, UploadedFile, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { imageFileInterceptor } from 'src/file-upload.utils';



@Controller('user')
@ApiTags('User ')
export class UserTypesController {
  constructor(private readonly userTypesService: UserTypesService) {}

  @Post()
  create(@Body() createUserTypeDto: CreateUserTypeDto) {
    return this.userTypesService.create(createUserTypeDto);
  }

  @Get()
  findAll() {
    return this.userTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTypeDto: UpdateUserTypeDto) {
    return this.userTypesService.update(+id, updateUserTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTypesService.remove(+id);
  }

 

}
