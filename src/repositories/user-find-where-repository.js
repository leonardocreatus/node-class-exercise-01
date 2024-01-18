import users from "../database/index.js";


export function userFindWhereRepository({ name, age, gender }) {
    
    return users.filter(user => {
        // return true
        const matchAge = age ? user.age === Number(age) : true;
        const matchGender = gender ? user.gender === gender : true;

        return matchAge && matchGender; 
    }).map(user => {
        return {
            ...user,
            password: undefined
        }
    })
}