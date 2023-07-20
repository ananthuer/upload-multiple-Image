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

    const imageRegExp = /^image\/(png|jpeg|jpg)$/i;

    let album = await Album.findByPk(albumId);

if (!album) return "No album found with this id";

const uploadResults = [];
const unsupportedFiles = [];



for (const file of files) {
  const imageId = `ImageId_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  const targetPath = path.join(__dirname, `albums/${albumId}/${imageId}${path.extname(file.originalname)}`);

  if (!imageRegExp.test(file.mimetype)) {
    unsupportedFiles.push(file.originalname);
    continue; // Skip this file and move to the next one
  }

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

const response = {
  uploadResults,
  unsupportedFiles
};

if (unsupportedFiles.length > 0) {
  response.unsupportedFiles = unsupportedFiles;
}

return response;

  }
}
