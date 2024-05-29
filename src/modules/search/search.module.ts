import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entitis/games.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
