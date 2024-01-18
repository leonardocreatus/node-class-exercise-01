import { userCreateRepository } from "../../repositories/user-create-repository.js";


export function userCreateController(request, response) {
    const data = request.body;
    const user = userCreateRepository(data);
    return response.status(201).json(user);
}