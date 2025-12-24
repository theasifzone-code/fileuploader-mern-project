import jwt from "jsonwebtoken";

export const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization
    // console.log(authHeader)
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"No token provided mid"})
    }
    // token extract
    const token = authHeader.split(" ")[1];
    // console.log(token)
    try {
        const decoded = jwt.verify(token,process.env.jWT_SECRET);
        req.userId = decoded.id
        // console.log(req)
        next()
    } catch (error) {
        return res.status(401).json({message:"invalid token", status: 500})
    }
}

