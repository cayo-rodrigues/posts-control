const { getUserByIdService } = require("../../User/getUserByIdService/getUserByIdService");
const { getPostByPostIdRepositories, updatePostRepositories } = require("../../../repositories");
const { ApplicationError } = require("../../../common/errors/application-error");

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
        throw new ApplicationError(404, "Hasn't post to update")
    }

    const {
        user = []
    } = await getUserByIdService({
        user_id: author_id
    });

    const has_author = Array.isArray(user) && user.length === 1;

    if (!has_author) {
        throw new ApplicationError(404, "Hasn't author in database")
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