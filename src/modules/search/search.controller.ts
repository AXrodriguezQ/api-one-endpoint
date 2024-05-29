import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { Game } from './entitis/games.entity';
import { DtoResponseGames } from './dto/response.dto';
import { ErrorResponse } from './dto/error.dto';

@Controller()
export class SearchController {

  constructor(private readonly searchService: SearchService) {}

  @Get('games')
  getEndPoint( @Query('name') queryTitle: string, @Query('page') page: number, @Query('amount') amountPerPage: number ): Promise<DtoResponseGames | ErrorResponse> {
    return this.searchService.getEndPoint( queryTitle, page, amountPerPage );
  }

  @Post('games')
  addGames( @Body() games: Game[] ): Promise<DtoResponseGames | ErrorResponse> {
    return this.searchService.addGames( games );
  }

}
