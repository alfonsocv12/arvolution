import { User } from "../entity";
import datasource from "../datasource";

export default class UserController {
    /**
     * Get Or create a user
     * @param user
     */
    async getOrCreateUser(reqUser: User): Promise<User> {
        let dbUser = await datasource.getRepository(User)
            .createQueryBuilder()
            .where('username = :username', { username: reqUser.username})
            .getOne();

        if (!dbUser) {
            const user = new User();
            user.username = reqUser.username;
            dbUser = await datasource.manager.save(user);
        }

        return dbUser;
    }


    /**
     * Get a list of users
     */
    async getAll(): Promise<User[]> {
        return await datasource.getRepository(User)
            .createQueryBuilder()
            .getMany();
    }
}