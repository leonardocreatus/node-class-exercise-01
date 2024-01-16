import users from "../database/index.js";


export function userCreateRepository(data) {
    users.push({
        id: users.length + 1,
        ...data
    })
}