import { Module } from '@nestjs/common';
import { SearchModule } from './modules/search/search.module';
import config from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.db,
      autoLoadEntities: true,
      synchronize: true
    }),
    SearchModule
  ],
})
export class AppModule {}
