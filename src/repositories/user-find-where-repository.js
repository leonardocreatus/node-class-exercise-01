import users from "../database/index.js";


export function userFindWhereRepository({ name, age, gender }) {
    
    return users.filter(user => {
        
    })
}