import datasource from "../datasource";
import { Score } from "../entity";
import { UpdateResult } from "typeorm";

export default class ScoreController {

    /**
     * Save a Score in database
     * @param scoreData
     */
    async createScore(scoreData: Score): Promise<Score> {
        const score = new Score();
        score.playerX = scoreData.playerX;
        score.playerXScore = scoreData.playerXScore
            ? scoreData.playerXScore : 0
        score.playerZ = scoreData.playerZ;
        score.playerZScore = scoreData.playerZScore
            ? scoreData.playerZScore : 0;
        return await datasource.manager.save(score);
    }

    /**
     * Update Score
     * @param scoreId
     * @param scoreData
     */
    async updateScore(scoreId: string, scoreData: Score): Promise<UpdateResult> {
        return await datasource.createQueryBuilder()
            .update(Score)
            .set(scoreData)
            .where('id = :id', {id: scoreId})
            .execute();
    }

    /**
     * Get all scores
     * @param page
     * @param numberOfElements
     */
    async getAll(page: number, numberOfElements: number): Promise<Score[]> {
        let baseQuery = datasource.getRepository(Score)
            .createQueryBuilder();

        if (page) {
            const elements = numberOfElements
                ? numberOfElements : 5;

            baseQuery = baseQuery.skip(page * elements).take(elements)
        }

        return await baseQuery.getMany();
    }
}