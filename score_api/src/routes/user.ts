import { Router, Request, Response } from "express";
import UserController from "../controllers/user";

const userController = new UserController();
const router = Router();

/**
 * @openapi
 * /user:
 *  post:
 *      tags: [User]
 *      produces:
 *          - application/json
 *      description: Get or create a user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/User'
 *      responses:
 *          200:
 *              description: Success
 */
router.post('/', async (req: Request, res: Response) => {
    const user = await userController.getOrCreateUser(req.body);

    res.json(user);
});

/**
 * @openapi
 * /user/all:
 *  get:
 *      tags: [User]
 *      produces:
 *          - application/json
 *      description: list all users
 *      responses:
 *          200:
 *              description: Success
 */
router.get('/all', async (req: Request, res: Response) => {
    res.json(await userController.getAll());
});

export default router;