import env from "../env";
import {
    Entity, PrimaryGeneratedColumn, Column ,
    ManyToOne, JoinColumn
} from "typeorm";
import User from './user';

/**
 * @openapi
 * definitions:
 *  Score:
 *      type: object
 *      required:
 *          - playerZ
 *          - playerX
 *      properties:
 *          playerX:
 *              type: string
 *          playerXScore:
 *              type: number
 *          playerZ:
 *              type: string
 *          playerZScore:
 *              type: number
 */
@Entity({ name: 'scores', schema: env.database})
export default class Score {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'player_z'})
    playerZ: string;

    @Column({ type: 'int', name: 'player_z_score' })
    playerZScore: number;

    @ManyToOne(() => User)
    @JoinColumn({name: 'player_x'})
    playerX: string;

    @Column({ type: 'int', name: 'player_x_score'})
    playerXScore: number;
}