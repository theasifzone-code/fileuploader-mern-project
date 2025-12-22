import {registerUser,loginUser,getAllUsers} from "../controllers/user.controller.js";
import express from "express";
import {authMiddleware} from "../middleware/auth.middleware.js"

const router = express.Router();

router.post("/auth/register",registerUser);
router.post("/auth/login",loginUser);
router.get("/auth/allUser",authMiddleware,getAllUsers);

export default router