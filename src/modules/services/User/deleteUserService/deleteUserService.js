const { ApplicationError } = require("../../../common/errors/application-error");
const { getUserRepositories, deleteUserRepositories } = require("../../../repositories");
const httpStatusCodes = require('http-status-codes');

const deleteUserService = async ({
    user_id
}) => {

    const {
        users = []
    } = await getUserRepositories({
        user_id
    });

    const has_user = Array.isArray(users) && users.length === 1;

    if(!has_user){
        throw new ApplicationError(httpStatusCodes.NOT_FOUND, "No user to delete")
    }

    const [user_to_delete] = users;

    await deleteUserRepositories({
        user_id: user_to_delete.id
    })

    return {
        deletedUser: user_to_delete
    };
}

module.exports = {
    deleteUserService
}