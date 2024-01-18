import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    jwt.verify(authorization, "DoYF5AXPFGwPezfucd5VYupXNojOugN6", (err, decoded) => {
        if(err) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = decoded;
        next();
    })    
}