import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';
import { User } from 'src/user-types/entities/user-type.entity';

@Injectable()
export class AlbumService {
 async create(createAlbumDto: CreateAlbumDto) {

  let user = await User.findByPk(createAlbumDto.userId);

  if(!user) return "no user found"
    return await Album.create({
      userId: createAlbumDto.userId,
      name: createAlbumDto.name,
      description: createAlbumDto.description,

    })
  }

 async findAll() {
    return await Album.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} album`;
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
