import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { sendOtpMail } from "../utils/sendMail.js"

// register controller
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists"});
        }
        const otp = Math.floor(100000 + Math.random() * 900000);
        const user = await User.create({
            name,
            email,
            password,
            otp,
            otpExpires: Date.now() + 10 * 60 * 1000 // 10 minutes
        });
        await sendOtpMail(email, otp,name);
        res.status(201).json({
            message: "OTP sent to your email",
            userId: user._id
        });
    } catch (error) {
        res.status(500).json({
            message: "User Registration Failed",
            err: error.message
        });
    }
}

// otp varify
export const verifyOtp = async (req, res) => {
    try {
        const { userId, otp } = req.body;
        const user = await User.findById(userId).select("+otp +otpExpires");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.otp !== Number(otp)) {
            return res.status(400).json({ message: "Invalid OTP" });
        }
        if (user.otpExpires < Date.now()) {
            return res.status(400).json({ message: "OTP expired" });
        }
        // jwt token generate
        const token = jwt.sign(
            { id: user._id },
            process.env.jWT_SECRET,
            { expiresIn: "1d" }
        )
        user.isVerified = true;
        user.otp = null;
        user.otpExpires = null;
        await user.save();
        res.json({ message: "Account verified successfully",token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// login controller
export const loginUser = async (req, res) => {
    try {
        const { password, email } = req.body
        const user = await User.findOne({ email }).select("+password");
        // console.log(user);
        if (!user.email) {
            return res.status(400).json({
                message: "User Not Found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                message: "password wrong"
            })
        }
        // jwt token generate
        const token = jwt.sign(
            { id: user._id },
            process.env.jWT_SECRET,
            { expiresIn: "1d" }
        )
        res.status(200).json({
            message: "User Logged In Successfully",
            token
        })
    } catch (error) {
        res.status(500).json({
            message: "User Login Failed",
            error
        })
    }
}

// Get All Users controller
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        // console.log(users)
        res.status(200).json({
            message: "Users Fetched Successfully",
            users
        },)
    } catch (error) {
        res.status(400).json({
            message: "Users Fetch Failed",
            error
        })
    }
}

