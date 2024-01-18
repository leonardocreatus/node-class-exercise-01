import { userCreateRepository  } from "../../repositories/user-create-repository.js";
import jwt from "jsonwebtoken";

export function validAuthController(request, response) {
    const { token } = request.body;
    jwt.verify(token, "DoYF5AXPFGwPezfucd5VYupXNojOugN6", (err, decoded) => {
        if(err) {
            return response.status(401).json({ message: "Unauthorized" });
        }
        return response.status(200).json(decoded);
    })
    
}   