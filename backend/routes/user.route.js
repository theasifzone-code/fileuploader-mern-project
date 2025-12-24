import {registerUser,loginUser,getAllUsers,verifyOtp} from "../controllers/user.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js"
import express from "express"
const router = express.Router();

router.post("/auth/register",registerUser);
router.post("/auth/verify-otp", verifyOtp);
router.post("/auth/login",loginUser);
router.get("/auth/allUser",authMiddleware,getAllUsers);

export default router