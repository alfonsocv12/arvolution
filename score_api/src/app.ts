import express from 'express';
import cors from 'cors';
import router from './routes';
import datasource from './datasource';

const app: express.Application = express();
const port: number = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
router(app);

datasource.initialize().then(() => {
    app.listen(port, () => {
        console.log(`Score API started at http://localhost:${port}/healthcheck`);
    });
}).catch(() => {
    throw new Error('Cant connect to database');
});