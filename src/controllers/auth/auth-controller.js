import jwt from "jsonwebtoken";
import { userFindByEmailRepository } from "../../repositories/user-find-by-email-repository.js";

export function authController(request, response) {
    const { email, password } = request.body;



    const user = userFindByEmailRepository(email)

    if(!user){
        return response.status(404).json();
    }

    if(user.password !== password) {
        return response.status(401).json({ message: "Unauthorized" });
    }

    jwt.sign({ email: user.email, profile: user.profile }, "DoYF5AXPFGwPezfucd5VYupXNojOugN6", (err, token) => {
        if(err) {
            return response.status(500).json({ message: "Internal server error" });
        }
        return response.status(200).json({ token });
    }, { expiresIn: "24h" })

}   