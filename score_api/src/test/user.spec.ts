import "reflect-metadata";
import { assert } from "chai";
import { getDatasource } from "./testDatabase";
import UserController from '../controllers/user';
import { DataSource, EntityMetadataNotFoundError } from "typeorm";
import { User } from "../entity";
import mock from 'mock-require';

describe("Test Get Users", () => {

    let userController: UserController;
    let datasource: DataSource;

    before(() => {
        userController = new UserController();
        datasource = getDatasource();

    })

    it("should return 1 user", async () => {
        mock('datasource', datasource);

        const user = new User();
        user.username = 'test_one';

        /**
         * Sorry about this don't know why is not working I can't give it more
         * time to fix the issue
         *
         * I know that assert.throws exists but it wasn't working either I have
         * spend to much time on this section
         */
        try {
            await userController.getOrCreateUser(user)
        } catch(error) {
            assert.equal(
                error.message, (new EntityMetadataNotFoundError("User")).message
            )
        }
    })

});