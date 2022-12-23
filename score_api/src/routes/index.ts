import { Application } from "express";
import swaggerUI from 'swagger-ui-express'
import { swaggerDocument } from "../swagger";
import env from '../env';

import userRouter from './user';
import scoreRouter from './score';

/**
 * @openapi
 * /healthcheck:
 *  get:
 *      responses:
 *          200:
 *              description: Tells you the status of the service
 *
 */
export default (app: Application) => {
    app.get('/healthcheck', (req, res) => {
        res.json({
            up: true
        });
    });

    app.use('/user', userRouter);
    app.use('/score', scoreRouter);

    if (env.docs) {
        app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    }
}