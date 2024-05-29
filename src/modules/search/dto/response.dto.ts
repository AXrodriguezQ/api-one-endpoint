import { Game } from "../entitis/games.entity"

export class DtoResponseGames {

    page: string

    message: string

    data: Array<Game> | string

    total_records: number

}
