import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Album } from 'src/album/entities/album.entity';
import * as path from 'path';
const fs = require('fs').promises; 
import { Photo } from './entities/photo.entity';


@Injectable()
export class PhotoService {
  create(createPhotoDto: CreatePhotoDto) {
    return 'This action adds a new photo';
  }

  findAll() {
    return `This action returns all photo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }

  async addImage(albumId: number, files: any){


    let album = await Album.findByPk(albumId);

if (!album) return "No album found with this id";

const uploadResults = [];

for (const file of files) {
  const imageId = `ImageId_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const targetPath = path.join(__dirname, `albums/${albumId}/${imageId}${path.extname(file.originalname)}`);

  const photoData = {
    albumId,
    name: file.originalname,
    path: targetPath,
    status: 'uploaded',
  };

  try {
    let photo = await Photo.create(photoData);
    uploadResults.push(photo);
  } catch (error) {
    console.log(error);

  }
}

return uploadResults;

  }
}
