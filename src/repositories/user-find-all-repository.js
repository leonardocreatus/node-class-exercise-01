import users from "../database/index.js";


export function userFindAllRepository() {
    return users.map(user => {
        return {
            ...user,
            password: undefined
        }
    });
}