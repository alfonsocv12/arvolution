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
 *          - player_z
 *          - player_x
 *      properties:
 *          player_x:
 *              type: string
 *          player_x_score:
 *              type: number
 *          player_z:
 *              type: string
 *          player_z_score:
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