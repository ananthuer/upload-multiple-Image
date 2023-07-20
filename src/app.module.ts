import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserTypesModule } from './user-types/user-types.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterModule } from '@nestjs/platform-express/multer';
import { join } from 'path';


import { JwtService } from '@nestjs/jwt';
import { AlbumModule } from './album/album.module';
import { PhotoModule } from './photo/photo.module';


@Module({
  imports: [UserTypesModule, MulterModule.registerAsync({
    useFactory: () => ({
      dest: './images',
    }),
    
  }) ,
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'images'),
    serveRoot: '/images'
  }),
  AlbumModule,
  PhotoModule,

 ],
  controllers: [AppController],
  providers: [AppService,JwtService ],
})
export class AppModule {}
