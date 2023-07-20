import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ValidationPipe, UploadedFile, ParseFilePipe, FileTypeValidator, UploadedFiles } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { imageFileInterceptor } from 'src/file-upload.utils';
import { FilesInterceptor } from '@nestjs/platform-express';


@Controller('photo')
@ApiTags('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}


  @Post('/upload-image/:albumId')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })

  @UseInterceptors(FilesInterceptor('files'))
  addImage(@Param('albumId') albumId: number, @UploadedFiles( new ParseFilePipe({
    // validators: [
    //   // new MaxFileSizeValidator({ maxSize: 100000 }),
    //   new FileTypeValidator({ fileType: 'jpeg'||'png' || 'jpg' }),
    // ]
  }))  files:Array<Express.Multer.File>){

    return this.photoService.addImage(albumId, files);
  }
}
