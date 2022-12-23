import env from './env';
import { DataSource } from "typeorm";
import { entities } from './entity';

export default new DataSource({
    type: "postgres",
    host: env.host,
    port: env.port,
    username: env.username,
    password: env.password,
    database: env.database,
    entities: [...entities],
    synchronize: true,
    logging: false,
});