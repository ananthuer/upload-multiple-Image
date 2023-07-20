import { Sequelize } from 'sequelize-typescript';

import { User } from './user-types/entities/user-type.entity';
import { Album } from './album/entities/album.entity';
import { Photo } from './photo/entities/photo.entity';




export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: "1316",
        database: "usermanagement",
        pool:{
           max: 5,
           min: 0,
           acquire: 30000,
         idle: 10000
        },
        
        
      });
      sequelize.addModels([ User, Album, Photo]);
      await sequelize.sync();
      return sequelize;
    },
  },
]; 