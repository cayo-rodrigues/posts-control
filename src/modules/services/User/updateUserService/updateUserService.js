const bcrypt = require('bcryptjs');
const { ApplicationError } = require('../../../common/errors/application-error');
const salt = bcrypt.genSaltSync(10);
const { getUserRepositories, updateUserRepositories } = require("../../../repositories");
const httpStatusCodes = require('http-status-codes');

const updateUserService = async ({
    id,
    user_email,
    user_password,
    full_name
}) => {

    const {
        users = []
    } = await getUserRepositories({
        user_id: id
    });

    const has_user = Array.isArray(users) && users.length === 1;

    if (!has_user) {
        throw new ApplicationError(httpStatusCodes.NOT_FOUND, "Missing user to update")
    }

    const crypt_password = bcrypt.hashSync(user_password, salt);

    await updateUserRepositories({
        id,
        user_email,
        user_password: crypt_password,
        full_name
    })

    return {
        updatedUser: {
            id,
            user_email,
            user_password: crypt_password,
            full_name
        }
    };
}

module.exports = {
    updateUserService
}