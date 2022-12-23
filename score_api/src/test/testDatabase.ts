import "reflect-metadata";
import sqlite from 'sqlite3';
import env from '../env';
import { DataSource } from "typeorm";
import { entities } from '../entity';
sqlite.verbose();

export const getDatasource = () => {
    env.database = ':memory:';

    const db = new sqlite.Database(env.database);

    db.run(`CREATE TABLE users (
        id VARCHAR(255) PRIMARY KEY,
        usernamr VARCHAR(255) UNIQUE
    )`);

    const datasource = new DataSource({
        type: 'sqlite',
        database: env.database,
        entities,
        synchronize: true,
        logging: false,
    });

    return datasource;
}