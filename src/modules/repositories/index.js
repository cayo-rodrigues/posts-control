module.exports = Object.freeze({
    ...require('./User/getUserRepositories/getUserRepositories'),
    ...require('./User/getUsersRepositories/getUsersRepositories'),
    ...require('./User/createUsersRepositories/createUsersRepositories'),
    ...require('./User/deleteUserRepositories/deleteUserRepositories'),
    ...require('./User/updateUserRepositories/updateUserRepositories'),
    ...require('./Post/createPostRepositories/createPostRepositories'),
    ...require('./Post/deletePostRepositories/deletePostRepositories'),
    ...require('./Post/getPostByPostIdRepositories/getPostByPostIdRepositories'),
    ...require('./Post/ListPostsRepositories/listPostsRepositories'),
    ...require('./Post/updatePostRepositories/updatePostRepositories')
})