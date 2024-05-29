import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entitis/games.entity';
import { QueryBuilder, Repository } from 'typeorm';
import { DtoResponseGames } from './dto/response.dto';
import { ErrorResponse } from './dto/error.dto';

@Injectable()
export class SearchService {

    constructor( @InjectRepository(Game) private gamesRepository: Repository<Game> ) { }

    async getEndPoint( queryTitle: string, page: number, amountPerPage: number ): Promise<DtoResponseGames | ErrorResponse>  {
        try {

            if (!page ) page = 0;
            if (!amountPerPage ) amountPerPage = 10;

            
            const pagination = this.gamesRepository
                .createQueryBuilder("game")
                .limit(amountPerPage)
                .offset(page)

            const res = await pagination.getMany()
            const total = await pagination.getCount()

            if ( queryTitle ) {

                const res = await pagination
                    .where("game.title ILIKE :query", { query: `%${queryTitle}%` })
                    .getMany()
                    
                    
                if ( res.length <= 0 ) return {
                    page: "0/0",
                    message: "data not found",
                    data: res,
                    total_records: 0
                }

                return {
                    page: `1/${Math.ceil(total/amountPerPage)}`,
                    message: "data found",
                    data: res,
                    total_records: total
                }
            }

            if ( res.length <= 0 ) return {
                page: "0/0",
                message: "data not found",
                data: res,
                total_records: 0
            }

            return {
                page: `1/${Math.ceil(total/amountPerPage)}`,
                message: "data found",
                data: res,
                total_records: total
            }

        } catch (error) {
            return { message: error }
        }
    }

    async addGames( games: Game[] ): Promise<DtoResponseGames | ErrorResponse> {
        try {
            const res = await this.gamesRepository.save(games)
            return { message: "Games added susseful!", data: res }
        } catch (error) {
            console.log(error);
            return { message: error }
        }
    }

}
