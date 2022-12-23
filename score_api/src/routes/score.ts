import { Router, Request, Response } from "express";
import ScoreController from "../controllers/score";

const router = Router();

const scoreController = new ScoreController();

/**
 * @openapi
 * /score/all:
 *  get:
 *      tags: [Score]
 *      produces:
 *          - application/json
 *      description: Get all Scores
 *      parameters:
 *          - in: query
 *            name: page
 *            required: false
 *            schema:
 *              type: number
 *          - in: query
 *            name: numberOfElements
 *            required: false
 *            schema:
 *              type: number
 *      responses:
 *          200:
 *              description: Success
 */
router.get('/all', async (req: Request, res: Response) => {
    res.json(await scoreController.getAll(
        parseInt(req.params.page, 0), parseInt(req.params.numberOfElements, 0)));
})

/**
 * @openapi
 * /score:
 *  post:
 *      tags: [Score]
 *      produces:
 *          - application/json
 *      description: Create new Score
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Score'
 *      responses:
 *          200:
 *              description: Success
 */
router.post('/', async (req: Request, res: Response) => {
    const score = await scoreController.createScore(req.body);
    res.json(score);
});

/**
 * @openapi
 * /score/{scoreId}:
 *  patch:
 *      tags: [Score]
 *      parameters:
 *          - in: path
 *            name: scoreId
 *            required: true
 *            schema:
 *              type: string
 *      produces:
 *          - application/json
 *      description: Update a Score
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Score'
 *      responses:
 *          200:
 *              description: Success
 */
router.patch('/:scoreId', async (req: Request, res: Response) => {
    const score = await scoreController.updateScore(req.params.scoreId, req.body);
    res.json(score);
})

export default router;