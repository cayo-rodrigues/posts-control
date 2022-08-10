const { getUserByIdService } = require("../../User/getUserByIdService/getUserByIdService");
const { getPostByPostIdRepositories, updatePostRepositories } = require("../../../repositories");
const { ApplicationError } = require("../../../common/errors/application-error");
const httpStatusCodes = require('http-status-codes');

const updatePostService = async ({
    id,
    author_id,
    post_text
}) => {

    const {
        posts = []
    } = await getPostByPostIdRepositories({
        post_id: id
    });

    const has_post = Array.isArray(posts) && posts.length === 1;

    if (!has_post) {
        throw new ApplicationError(httpStatusCodes.NOT_FOUND, "Hasn't post to update")
    }

    const {
        user = []
    } = await getUserByIdService({
        user_id: author_id
    });

    const has_author = Array.isArray(user) && user.length === 1;

    if (!has_author) {
        throw new ApplicationError(httpStatusCodes.NOT_FOUND, "Hasn't author in database")
    }

    const post_belongs_to_author = user[0].id === posts[0].author_id

    if (!post_belongs_to_author) {
        throw new ApplicationError(httpStatusCodes.FORBIDDEN, "Can't change a post's author")
    }

    await updatePostRepositories({
        id,
        author_id,
        post_text
    })

    return {
        updatedPost: {
            id,
            author_id,
            post_text
        }
    };
}

module.exports = {
    updatePostService
}