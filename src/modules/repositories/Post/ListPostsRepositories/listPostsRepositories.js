const {
    client
} = require('../../../common/handlers')

const listPostsRepositories = async ({
    user_id
} = {}) => {

    const response = user_id
        ? await client('posts').where({ author_id: user_id })
        : await client('posts')

    const has_response = Array.isArray(response) && response.length > 0;

    if (!has_response) {
        return {
            posts: []
        }
    }

    return {
        posts: response
    }

}

module.exports = {
    listPostsRepositories
}