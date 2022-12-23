import env from "../env";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * @openapi
 * definitions:
 *  User:
 *      type: object
 *      required:
 *          - username
 *      properties:
 *          username:
 *              type: string
 */
@Entity({name: 'users', schema: env.database})
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    username: string;
}