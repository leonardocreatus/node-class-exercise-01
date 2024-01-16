import { userFindWhereRepository } from "../repositories/user-find-where-repository.js";


export function userFetchController(request, response) {
    const { name, age, gender } = request.query;
    
    if( name ) {
        // se é valido
    }

    if ( age ) {
        // se é valido
    }

    if( gender) {
        // se é valido
    }


    const users = userFindWhereRepository({
        name, age, gender
    });

    return response.status(200).json(users);
}