import { userFindByIdRepository } from "../repositories/user-find-by-id-repository.js";


export function userFindbyIdController(request, response) {
    const { id } = request.params;
    const user = userFindByIdRepository(id);
    if(!user) {
        return response.status(404).json({ message: "User not found" });
    }
    return response.status(200).json(user);
}