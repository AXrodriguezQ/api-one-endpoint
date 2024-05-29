import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;
    
    @Column()
    categories: string;
    
    @Column({ default: true })
    good_game: boolean;

}