module.exports = Object.freeze({
    ...require('./User/getAllUsersService/getAllUsersService'),
    ...require('./User/getUserByIdService/getUserByIdService'),
    ...require('./User/createUserService/createUserService'),
    ...require('./User/deleteUserService/deleteUserService'),
    ...require('./User/updateUserService/updateUserService'),
    ...require('./Post/createPostService/createPostService'),
    ...require('./Post/listPostsService/listPostsService'),
    ...require('./Post/deletePostService/deletePostService'),
    ...require('./Post/updatePostService/updatePostService')
})