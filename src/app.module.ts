/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FilesModules } from './modules/files/file.module';
import { TypeOrmConfigModule } from './common/typeorm/typeorm.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    FilesModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
