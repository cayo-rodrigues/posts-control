const { getUserByIdService } = require("../../User/getUserByIdService/getUserByIdService");
const { createPostRepositories } = require("../../../repositories");
const { ApplicationError } = require("../../../common/errors/application-error");
const httpStatusCodes = require('http-status-codes');

const createPostService = async (post) => {

    const {
        author_id
    } = post;

    const {
        user
    } = await getUserByIdService({
        user_id: author_id
    })

    const has_author = Array.isArray(user) && user.length > 0;

    if(has_author === false) {
        throw new ApplicationError(httpStatusCodes.NOT_FOUND, "Hasn't author in database")
    }

    const {
        post_created
    } = await createPostRepositories({
        post
    });

    const has_post_created = Array.isArray(post_created) && post_created.length > 0;

    if(has_post_created === false){
        return {
            post_created_id: []
        }
    }

    return {
        post_created_id: post_created
    };
}

module.exports = {
    createPostService
}