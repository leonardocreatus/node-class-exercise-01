import users from "../database/index.js";


export function userFindByEmailRepository(email) {

    return users.find(user => {
       return user.email.toLowerCase() === email.toLowerCase();
    })
}