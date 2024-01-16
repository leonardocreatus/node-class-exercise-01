import { userFindAllRepository } from "../repositories/user-find-all-repository.js";


export function userFetchController(request, response) {
    const users = userFindAllRepository();;
    return response.status(200).json(users);
}