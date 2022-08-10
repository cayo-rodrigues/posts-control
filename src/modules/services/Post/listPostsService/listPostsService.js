const { getUserByIdService } = require("../../User/getUserByIdService/getUserByIdService");
const { listPostsRepositories } = require("../../../repositories");
const { ApplicationError } = require("../../../common/errors/application-error");
const httpStatusCodes = require('http-status-codes');

const listPostsService = async ({
    user_id
}) => {

    if (user_id) {
        const { user } = await getUserByIdService({ user_id })

        const has_author = Array.isArray(user) && user.length > 0;

        if (!has_author) {
            throw new ApplicationError(
                httpStatusCodes.NOT_FOUND,
                "Missing author in database"
            )
        }
    }


    const {
        posts = []
    } = await listPostsRepositories({
        user_id
    });

    return {
        posts
    };
}

module.exports = {
    listPostsService
}