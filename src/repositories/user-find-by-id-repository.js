import users from "../database/index.js";


export function userFindByIdRepository(id) {
    const user = users.find(user => user.id == id);
    return {
        ...user,
        password: undefined
    }
}