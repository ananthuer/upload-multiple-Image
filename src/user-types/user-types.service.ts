import { Injectable } from '@nestjs/common';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { User } from './entities/user-type.entity';
import sequelize from 'sequelize';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserTypesService {
 async create(createUserTypeDto: CreateUserTypeDto) {


    return await User.create({
      username:createUserTypeDto.username,
     
    })
  }

 async findAll() {
    return await User.findAll()
  }

async  findOne(id: number) {
    return await User.findByPk(id)
  }

async  update(id: number, updateUserTypeDto: UpdateUserTypeDto) {
    return await User.update({
      username:updateUserTypeDto.username,
     
    },{
      where:{
        id:id
      }
    })
  }

async  remove(id: number) {
    return await User.destroy({
      where:{
        id:id
      }
    })
  }


}
